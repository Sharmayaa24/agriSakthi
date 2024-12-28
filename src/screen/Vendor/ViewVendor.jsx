import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  paginationStyles,
} from "../../Styles/ComponentStyles/style";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FilterIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { StyledContainer } from "../../Styles/ComponentStyles/style";
import { getColumnWidth } from "../../Styles/datagridMQ";
import { APP_LINK } from "../../screen/common/sakthiMenu";
import { viewVendorProgress, deleteVendorProgress } from "../../redux/Vendor/vendorAction";
import { CircleLoader } from 'react-spinners';
const ActionMenu = ({ user, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    onDelete(user.id);
    handleClose();
  };
  const handleEdit = () => {
    navigate(`/vendor/edit/${user.id}`);
    handleClose();
  };
  const handleView = () => {
    navigate(`/vendor/view/${user.id}`);
    handleClose();
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleView}>View</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};
const ViewVendor = () => {
  const [selection, setSelection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [vendorToDelete, setVendorToDelete] = useState(null);
  const vendorData = useSelector((state) => state.vendor?.viewVendors.data);
  const vendorList = vendorData?.data || [];
  const totalRecords = vendorData?.totalRecords || 0;
  const vendorPageSize = vendorData?.pagesize || 10;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(viewVendorProgress(currentPage));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, [dispatch, currentPage]);
  useEffect(() => {
    if (vendorData?.success) {
      setRows(vendorList);
    } else {
      setRows([]);
    }
  }, [vendorData]);
  const handleDeleteRow = (id) => {
    setVendorToDelete(id);
    setOpenDialog(true);
  };
  const confirmDelete = () => {
    if (vendorToDelete) {
      dispatch(deleteVendorProgress(vendorToDelete));
      setRows((prevRows) => prevRows.filter((row) => row.id !== vendorToDelete));
      setVendorToDelete(null);
      setOpenDialog(false);
      dispatch(viewVendorProgress(currentPage));
    }
  };
  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };
  const handleAddVendor = () => {
    navigate(APP_LINK.ADDVENDOR);
  };
  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };
  const handleFilterCondition = (condition) => {
    switch (condition) {
      case "Condition1":
        setRows((prevRows) =>
          [...prevRows].sort((a, b) => a.first_name.localeCompare(b.first_name))
        );
        break;
      case "Condition2":
        setRows((prevRows) =>
          [...prevRows].sort((a, b) => b.created_at.localeCompare(a.created_at))
        );
        break;
      default:
        console.log(`Unknown filter condition: ${condition}`);
    }
    handleFilterClose();
  };
  return (
    <div>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
          <Box>
            <h1>Vendors</h1>
            <p>Here is your Vendor list data</p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              onClick={handleAddVendor}
              sx={{ backgroundColor: "#1D7F41", color: "#fff" }}
            >
              Add New
            </Button>
            <Button
              variant="contained"
              startIcon={<FilterIcon color="blue" />}
              endIcon={<ExpandMoreIcon />}
              onClick={handleFilterClick}
              sx={{ backgroundColor: "#F4F5F9", color: "#DDE0E4" }}
            >
              Filter
            </Button>
          </Box>
        </Grid>
      </Grid>
      <StyledContainer>
        <Menu
          anchorEl={filterAnchorEl}
          open={Boolean(filterAnchorEl)}
          onClose={handleFilterClose}
        >
          <MenuItem onClick={() => handleFilterCondition("Condition1")}>
            First Name A-Z
          </MenuItem>
          <MenuItem onClick={() => handleFilterCondition("Condition2")}>
            Created At Newest to Oldest
          </MenuItem>
        </Menu>
        {loading && (
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgcolor="rgba(255, 255, 255, 0.5)"
            zIndex={1000}
          >
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <CircleLoader loading={loading} size={50} color="#1D7F41" />
            </Box>
          </Box>
        )}
        {!loading && (
          <>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  boxShadow: 3,
                  width: '100%',
                  maxHeight:'100%',
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  padding:'30px'
                }}
              >
                <Table stickyHeader aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ backgroundColor: "#1D7F41", color: "#fff", fontWeight: "bold" }}>
                        Vendor ID
                      </TableCell>
                      <TableCell sx={{ backgroundColor: "#1D7F41", color: "#fff", fontWeight: "bold" }} align="center">
                        First Name
                      </TableCell>
                      <TableCell sx={{ backgroundColor: "#1D7F41", color: "#fff", fontWeight: "bold" }} align="center">
                        Last Name
                      </TableCell>
                      <TableCell sx={{ backgroundColor: "#1D7F41", color: "#fff", fontWeight: "bold" }} align="center">
                        Email
                      </TableCell>
                      <TableCell sx={{ backgroundColor: "#1D7F41", color: "#fff", fontWeight: "bold" }} align="center">
                        Phone Number
                      </TableCell>
                      <TableCell sx={{ backgroundColor: "#1D7F41", color: "#fff", fontWeight: "bold" }} align="center">
                        Shop Name
                      </TableCell>
                      <TableCell sx={{ backgroundColor: "#1D7F41", color: "#fff", fontWeight: "bold" }} align="center">
                        Address
                      </TableCell>
                      <TableCell sx={{ backgroundColor: "#1D7F41", color: "#fff", fontWeight: "bold" }} align="center">
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vendorList.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {row.vendor_serial_no}
                        </TableCell>
                        <TableCell align="center">{row.first_name}</TableCell>
                        <TableCell align="center">{row.last_name}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.phone}</TableCell>
                        <TableCell align="center">{row.shop_name}</TableCell>   
                        <TableCell align="center">{row.address}</TableCell>
                        <TableCell align="center">
                          <ActionMenu user={row} onDelete={handleDeleteRow} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Box>
            {selection.length > 0 && (
              <div>
                <h2>Selected Rows:</h2>
                {selection.map((id) => (
                  <div key={id}>
                    {rows.find((row) => row.id === id)?.first_name}
                  </div>
                ))}
              </div>
            )}
            <Box
              className="button-box"
              padding={{ xs: 1, sm: 3 }}
              display="flex"
              justifyContent="end"
            >
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                sx={paginationStyles.PreviousButton}
              >
                &lt;&lt; Previous
              </Button>
              <Box sx={{ backgroundColor: "#E3E4EB" }}>
                {Array.from(
                  { length: Math.ceil(totalRecords / vendorPageSize) },
                  (_, i) => i + 1
                ).map((pageNumber) => (
                  <Button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    sx={{
                      backgroundColor:
                        currentPage === pageNumber ? "#fff" : "#E3E4EB",
                      color: currentPage === pageNumber ? "#000" : "#B6BEE8",
                      ...paginationStyles.arrayButtons,
                    }}
                  >
                    {pageNumber}
                  </Button>
                ))}
              </Box>
              <Button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(totalRecords / vendorPageSize)))}
                sx={paginationStyles.nextButton}
              >
                Next &gt;&gt;
              </Button>
            </Box>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
              <DialogTitle>Confirm Delete</DialogTitle>
              <DialogContent>
                Are you sure you want to delete this row?
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDialog(false)} color="primary">
                  Cancel
                </Button>
                <Button onClick={confirmDelete} color="primary">
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </StyledContainer>
    </div>
  );
};
export default ViewVendor;