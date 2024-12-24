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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FilterIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledContainer,
  StyledDataGrid,
  paginationStyles,
} from "../../Styles/ComponentStyles/style";
import { getColumnWidth } from "../../Styles/datagridMQ";
import { APP_LINK } from "../../screen/common/sakthiMenu";
import {
  viewAllWalletProgress,
  deleteWalletProgress,
} from "../../redux/wallet/walletAction";
import { CircleLoader } from "react-spinners";

const columns = (handleDeleteRow) => [
  { field: "customer_serial_no", headerName: "Customer ID", width: getColumnWidth("CustomerId") },
  { field: "first_name", headerName: "First Name", width: getColumnWidth("FirstName") },
  { field: "bonus_amount", headerName: "Bonus Amount", width: getColumnWidth("LastName") },
  { field: "email", headerName: "Email", width: getColumnWidth("Email") },
  { field: "total_amount", headerName: "Total Amount", width: getColumnWidth("PhoneNumber") },
  { field: "available_amount", headerName: "Available Amount", width: getColumnWidth("Address") },
  {
    field: "actions",
    headerName: "Actions",
    width: getColumnWidth("Actions"),
    renderCell: (params) => (
      <ActionMenu user={params.row} onDelete={handleDeleteRow} />
    ),
  },
];

const ActionMenu = ({ user, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleEdit = () => {
    navigate(`/customer/edit/${user.id}`);
    handleClose();
  };
  const handleView = () => {
    navigate(`/customer/view/${user.id}`);
    handleClose();
  };
  const handleAdd=()=>{
    navigate(`/customer/add/wallet/${user.id}`)
  }
  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleAdd}>Add Wallet</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleView}>View</MenuItem>
      </Menu>
    </>
  );
};

const ViewWallet = () => {
  const [selection, setSelection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vendorToDelete, setVendorToDelete] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const walletData = useSelector((state) => state.wallet.viewAllWallet.data);

  const walletList = walletData?.data || [];
  const totalRecords = walletData?.totalRecords || 0;
  const walletPageSize = walletData?.pagesize || 10;

  const preprocessData = (data) =>
    data.map((item) => ({
      id: item.id,
      customer_serial_no: item.Customer?.customer_serial_no || "",
      first_name: item.Customer?.first_name || "",
      bonus_amount: item.bonus_amount || 0,
      email: item.Customer?.email || "",
      total_amount: item.total_amount || 0,
      available_amount: item.available_amount || 0,
    }));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(viewAllWalletProgress(currentPage));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (walletList?.length > 0) {
      setRows(preprocessData(walletList));
    } else {
      setRows([]);
    }
  }, [walletList]);

  const handleDeleteRow = (id) => {
    setVendorToDelete(id);
    setOpenDialog(true);
  };

  const confirmDelete = async () => {
    if (vendorToDelete) {
      await dispatch(deleteWalletProgress(vendorToDelete));
      setRows((prevRows) => prevRows.filter((row) => row.id !== vendorToDelete));
      setVendorToDelete(null);
      setOpenDialog(false);
      dispatch(viewAllWalletProgress(currentPage));
    }
  };

  const handleFilterClick = (event) => setFilterAnchorEl(event.currentTarget);
  const handleFilterClose = () => setFilterAnchorEl(null);

  const handleFilterCondition = (condition) => {
    let sortedRows = [...rows];
    if (condition === "Condition1") {
      sortedRows.sort((a, b) => a.first_name.localeCompare(b.first_name));
    } else if (condition === "Condition2") {
      sortedRows.sort((a, b) => b.created_at.localeCompare(a.created_at));
    }
    setRows(sortedRows);
    handleFilterClose();
  };

  const handleAddVendor = () => navigate(APP_LINK.PARTICULARCUSTOMER);

  return (
    <>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
          <Box>
            <h1>Wallets</h1>
            <p>Here is your Wallets list data</p>
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
              sx={{ backgroundColor: "#1d7f41", color: "#fff" }}
            >
              Add New
            </Button>
            <Button
              variant="contained"
              startIcon={<FilterIcon />}
              endIcon={<ExpandMoreIcon />}
              onClick={handleFilterClick}
              sx={{ backgroundColor: "#f4f5f9", color: "#dde0e4" }}
            >
              Filter
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box padding={3}>
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
          {loading ? (
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
                <CircleLoader loading={loading} size={50} color="#1d7f41" />
              </Box>
            </Box>
          ) : (
            <>
              <StyledDataGrid
                rows={rows}
                columns={columns(handleDeleteRow)}
                pageSize={walletPageSize}
                pagination={false}
                onSelectionModelChange={(newSelection) => setSelection(newSelection)}
              />
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
                <Box sx={{ backgroundColor: "#e3e4eb" }}>
                  {Array.from(
                    { length: Math.ceil(totalRecords / walletPageSize) },
                    (_, i) => i + 1
                  ).map((pageNumber) => (
                    <Button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      sx={{
                        backgroundColor:
                          currentPage === pageNumber ? "#fff" : "#e3e4eb",
                        color: currentPage === pageNumber ? "#000" : "#b6bee8",
                        ...paginationStyles.arrayButtons,
                      }}
                    >
                      {pageNumber}
                    </Button>
                  ))}
                </Box>
                <Button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(prev + 1, Math.ceil(totalRecords / walletPageSize))
                    )
                  }
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
      </Box>
    </>
  );
};

export default ViewWallet;
