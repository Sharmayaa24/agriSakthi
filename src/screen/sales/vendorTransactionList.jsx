import React, { useState } from "react";

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
import { useNavigate } from "react-router-dom";
import FilterIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../Styles/style.css";

import {
  StyledContainer,
  StyledDataGrid,
  paginationStyles,
} from "../../Styles/ComponentStyles/style";
// import { getColumnWidth } from "../../Styles/datagridMQ";
import { APP_LINK } from "../../screen/common/sakthiMenu";
import { useSelector, useDispatch } from "react-redux";
import { CircleLoader } from "react-spinners";
import { viewParticularTransactionProgress } from "../../redux/transaction/transactionAction";

const columns = (handleDeleteRow) => [
  { field: "TransactionId", headerName: "Transactions Id", width: 300 },
  { field: "CustomerName", headerName: "Customer Name", width: 300 },
  { field: "TotalAmount", headerName: "Total Amount", width: 300 },
  {
    field: "CreatedDate",
    headerName: "Created Date",
    width: 300,
  },
  {
    field: "AmountPaid",
    headerName: "Amount Paid",
    width: 300,
  },
  {
    field: "PaidDate",
    headerName: "Paid Date",
    width: 300,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 300,
  },
  
];

const ActionMenu = ({ user, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigator = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    console.log(`/${user["Vendor Id"]}`);
    navigator(`/${user["Vendor Id"]}`);
    handleClose();
  };

  const handleDelete = () => {
    onDelete(user.id);
    handleClose();
  };

  const handleView = () => {
    console.log(`/${user["Vendor Id"]}`);
    navigator(`/${user["Vendor Id"]}`);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={handleView}>view</MenuItem>
      </Menu>
    </>
  );
};

const VendorPaymentList = () => {
  const [rows, setRows] = useState();
  const [selection, setSelection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userToDelete, setUserToDelete] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const navigator = useNavigate();
  const VendorTransactionData = useSelector(
    (state) => state.transaction?.particularViewTransaction?.data?.data
  );
  const vendorList = VendorTransactionData?.data || [];
  const totalRecords = VendorTransactionData?.totalRecords || 0;
  const transactionPageSize = VendorTransactionData?.pagesize || 10;

  const preprocessData = (data) => {
    if (!data) {
        return [];
    }
    if (!Array.isArray(data)) {
        data = [data];
    }
    const updatedData = data.map((item) => {

        const sale = item.Sale;
        if (!Array.isArray(sale)) {
            item.Sale = [sale]; 
        }
        return item.Sale.map((saleItem, index) => {
            return {
                id: index + 1, 
                TransactionId: item.transaction_serial_no || "",
                CustomerId: item.customer_id || "",
                VendorId: item.vendor_id || "",
                CustomerName: item.customer_name || "",
                TotalAmount: item.price || 0,
                CreatedDate: item.created_at || "",
                AmountPaid: saleItem.price || 0,
                PaidDate: saleItem.date || "",
                Status: saleItem.status || "Unpaid",
            };
        });
    });

  
    return updatedData.flat(); 
};

  const vendorId = "dfc07753-77d6-45a2-a064-372ec50f17eb";
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(viewParticularTransactionProgress(vendorId));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, [dispatch, vendorId]);

  React.useEffect(() => {
    console.log("useEffect");
    console.log(VendorTransactionData);
    
    if (VendorTransactionData) {
      console.log(`preprocessData(VendorTransactionData)`);
      console.log(preprocessData(VendorTransactionData));

      setRows(preprocessData(VendorTransactionData));
    } else {
      setRows([]);
    }
  }, []);
  const handleDeleteRow = (id) => {
    setUserToDelete(id);
    setOpenDialog(true);
  };

  const confirmDelete = () => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== userToDelete));
    setOpenDialog(false);
    setUserToDelete(null);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };
  const handeladdproduct = () => {
    navigator(APP_LINK.PAYPRIZE);
  };
  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };
  const handleFilterCondition = (condition) => {
    switch (condition) {
      case "Condition 1":
        setRows((prevRows) =>
          prevRows.sort((a, b) => a.BottleName.localeCompare(b.BottleName))
        );
        break;
      case "Condition 2":
        setRows((prevRows) =>
          prevRows.sort((a, b) => b.LastOrder - a.LastOrder)
        );
        break;
      default:
        console.log(`Unknown filter condition: ${condition}`);
    }
    handleFilterClose();
  };

  return (
    <Box padding={3}>
      <Grid container spacing={2} padding={5}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box>
            <h2>TRANSACTIONS</h2>
            <p>Here is your Transactions list data</p>
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} md={4} lg={4} xl={5}></Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={3}>
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
              onClick={handeladdproduct}
              sx={{ backgroundColor: "#1d7f41", color: "#fff" }}
            >
              Add New
            </Button>

            <Button
              variant="contained"
              startIcon={<FilterIcon color="blue" />}
              endIcon={<ExpandMoreIcon />}
              onClick={handleFilterClick}
              backgroundColor={"#f4f5f9"}
              color="#dde0e4"
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
          <MenuItem onClick={() => handleFilterCondition("Condition 1")}>
            UserName A-Z
          </MenuItem>
          <MenuItem onClick={() => handleFilterCondition("Condition 2")}>
            Last order higher to lower
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
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <CircleLoader loading={loading} size={50} color="#1d7f41" />
            </Box>
          </Box>
        )}
        {!loading && (
          <>
            <StyledDataGrid
              rows={VendorTransactionData?(preprocessData(VendorTransactionData)):null}
              columns={columns(handleDeleteRow)}
              pageSize={transactionPageSize}
              pagination={false}
              onSelectionModelChange={(newSelection) => {
                setSelection(newSelection);
              }}
            />
            {selection.length > 0 && (
              <div>
                <h2>Selected Rows:</h2>
                {selection.map((id) => (
                  <div key={id}>
                    {rows.find((row) => row.id === id).CustomerName}
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
                  { length: Math.ceil(totalRecords / transactionPageSize) },
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
                    Math.min(
                      prev + 1,
                      Math.ceil(totalRecords / transactionPageSize)
                    )
                  )
                }
                sx={{
                  ...paginationStyles.nextButton,
                }}
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
  );
};

export default VendorPaymentList;
