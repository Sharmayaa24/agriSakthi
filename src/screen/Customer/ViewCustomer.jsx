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
  Typography,
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
import {
  StyledButton,
  StyledTextField,
  styles,
} from "../../Styles/ComponentStyles/formStyles";
import { getColumnWidth } from "../../Styles/datagridMQ";
import { APP_LINK } from "../../screen/common/sakthiMenu";
import {
  viewAllCustomerProgress,
  deleteCustomerProgress,
} from "../../redux/Customer/customerAction";
import { CircleLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import {
  addWalletProgress,
  updateWalletProgress,
} from "../../redux/wallet/walletAction";

const columns = (handleDeleteRow, handleAddWallet, handleEditWallet) => [
  { field: "id", headerName: "Vendor ID", width: getColumnWidth("CustomerId") },
  {
    field: "first_name",
    headerName: "First Name",
    width: getColumnWidth("FirstName"),
  },
  {
    field: "last_name",
    headerName: "Last Name",
    width: getColumnWidth("LastName"),
  },
  { field: "email", headerName: "Email", width: getColumnWidth("Email") },
  {
    field: "phone",
    headerName: "Phone Number",
    width: getColumnWidth("PhoneNumber"),
  },
  { field: "address", headerName: "Address", width: getColumnWidth("Address") },
  {
    field: "totalAmount",
    headerName: "Total Amount",
    width: getColumnWidth("Email"),
  },
  {
    field: "availableAmount",
    headerName: "Available Amount",
    width: getColumnWidth("Email"),
  },
  {
    field: "usedAmount",
    headerName: "Used Amount",
    width: getColumnWidth("Email"),
  },
  {
    field: "wallet",
    headerName: "Wallets",
    width: getColumnWidth("Email"),
    renderCell: (params) => (
      <div>
        <StyledButton onClick={() => handleAddWallet(params.row)}>
          Add
        </StyledButton>
        <StyledButton onClick={() => handleEditWallet(params.row)}>
          Edit
        </StyledButton>
      </div>
    ),
  },
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
    navigate(`/customer/edit/${user.customerId}`);
    handleClose();
  };
  const handleView = () => {
    navigate(`/customer/view/${user.customerId}`, {});
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
  const [openAddWalletDialog, setOpenAddWalletDialog] = useState(false);
  const [openEditWalletDialog, setOpenEditWalletDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [walletData, setWalletData] = useState({});
  const customerData = useSelector(
    (state) => state.customer.viewAllCustomer.data
  );
  console.log(customerData);
  const customerList = customerData?.data || [];
  console.log(customerList);
  const totalRecords = customerData?.totalRecords || 0;
  const vendorPageSize = customerData?.pagesize || 10;

  const preprocessData = (data) =>
    data.map((item) => ({
      id: item.customer_serial_no,
      customerId: item.id,
      first_name: item.first_name || "",
      last_name: item.last_name || "",
      email: item.email || "",
      phone: item.phone || "",
      address: item.address || "",
      totalAmount: item.Wallet?.total_amount || 0,
      availableAmount: item.Wallet?.available_amount || 0,
      usedAmount: item.Wallet?.used_amount || 0,
    }));

  console.log(preprocessData(customerList));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(viewAllCustomerProgress(currentPage));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (customerData?.success) {
      setRows(preprocessData(customerList));
    } else {
      setRows([]);
    }
  }, []);

  const handleDeleteRow = (id) => {
    setVendorToDelete(id);
    setOpenDialog(true);
  };

  const confirmDelete = () => {
    if (vendorToDelete) {
      console.log(vendorToDelete, "data");
      dispatch(deleteCustomerProgress(vendorToDelete));
      setRows((prevRows) =>
        prevRows.filter((row) => row.id !== vendorToDelete)
      );
      setVendorToDelete(null);
      setOpenDialog(false);
      dispatch(viewAllCustomerProgress(currentPage));
    }
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleAddVendor = () => {
    navigate(APP_LINK.ADDCUSTOMER);
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

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customer_id: "",
      wallet_amount: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    try {
      const { customer_id, wallet_amount } = data;
      const formData = { customer_id, wallet_amount };

      if (isEditing) {
        await dispatch(updateWalletProgress(formData));
      } else {
        await dispatch(addWalletProgress(formData));
      }

      setOpenAddWalletDialog(false);
      dispatch(viewAllCustomerProgress(currentPage));
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  const handleAddWallet = (row) => {
    setWalletData(row);
    setIsEditing(false)
    setOpenAddWalletDialog(true);
    setValue("customerId", row.id);
    setValue("customer_id", row.customerId);
    setValue("wallet_amount", 0);
  };
  const handleEditWallet = (row) => {
    setWalletData(row);
    setIsEditing(true)
    setOpenEditWalletDialog(true);
    setValue("customerId", row.id);
    setValue("customer_id", row.customerId);
    setValue("wallet_amount", 0);
    setValue("available_amount", row.availableAmount);
  };

  return (
    <>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
          <Box>
            <h1>Customer</h1>
            <p>Here is your customer list data</p>
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
              startIcon={<FilterIcon color="blue" />}
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
                rows={preprocessData(customerList)}
                columns={columns(
                  handleDeleteRow,
                  handleAddWallet,
                  handleEditWallet
                )}
                pageSize={vendorPageSize}
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  sx={paginationStyles.PreviousButton}
                >
                  &lt;&lt; Previous
                </Button>
                <Box sx={{ backgroundColor: "#e3e4eb" }}>
                  {Array.from(
                    { length: Math.ceil(totalRecords / vendorPageSize) },
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
                        Math.ceil(totalRecords / vendorPageSize)
                      )
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
              <Dialog
                open={openAddWalletDialog}
                onClose={() => setOpenAddWalletDialog(false)}
              >
                <DialogTitle>Add Wallet</DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <StyledTextField
                      label="Customer Id"
                      sx={{ width: "100%", marginBottom: 2 }}
                      {...register("customerId", {
                        required: "Customer Id is required",
                        maxLength: {
                          value: 50,
                          message: "Customer Id cannot exceed 50 characters",
                        },
                      })}
                      error={!!errors.customerId}
                      helperText={
                        errors.customerId ? errors.customerId.message : ""
                      }
                      disabled
                    />
                    <StyledTextField
                      label="Customer ID"
                      sx={{ width: "100%", marginBottom: 2,display:"none" }}
                      {...register("customer_id", {
                        required: "Customer ID is required",
                        maxLength: {
                          value: 50,
                          message: "Customer ID cannot exceed 50 characters",
                        },
                      })}
                      error={!!errors.customer_id}
                      helperText={errors.customer_id?.message}
                      disabled
                    />
                    <StyledTextField
                      label="Wallet Amount"
                      sx={{ width: "100%" }}
                      {...register("wallet_amount", {
                        required: "Wallet Amount is required",
                        valueAsNumber: true,
                        min: {
                          value: 0.01,
                          message: "Wallet Amount must be greater than 0",
                        },
                      })}
                      error={!!errors.wallet_amount}
                      helperText={errors.wallet_amount?.message}
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => setOpenAddWalletDialog(false)}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleSubmit(onSubmit)} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
              <Dialog
                open={openEditWalletDialog}
                onClose={() => setOpenEditWalletDialog(false)}
              >
                <DialogTitle>Add Wallet</DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <StyledTextField
                      label="Customer Id"
                      sx={{ width: "100%", marginBottom: 2 }}
                      {...register("customerId", {
                        required: "Customer Id is required",
                        maxLength: {
                          value: 50,
                          message: "Customer Id cannot exceed 50 characters",
                        },
                      })}
                      error={!!errors.customerId}
                      helperText={
                        errors.customerId ? errors.customerId.message : ""
                      }
                      disabled
                    />
                    <StyledTextField
                      label="Customer ID"
                      sx={{ width: "100%", marginBottom: 2 ,display:"none" }}
                      {...register("customer_id", {
                        required: "Customer ID is required",
                        maxLength: {
                          value: 50,
                          message: "Customer ID cannot exceed 50 characters",
                        },
                      })}
                      error={!!errors.customer_id}
                      helperText={errors.customer_id?.message}
                      disabled
                    />{" "}
                    <StyledTextField
                      label="Available Amount"
                      sx={{ width: "100%" }}
                      {...register("available_amount", {
                        required: "Available Amount is required",
                        valueAsNumber: true,
                        min: {
                          value: 0.01,
                          message: "Available Amount must be greater than 0",
                        },
                      })}
                      error={!!errors.wallet_amount}
                      helperText={errors.wallet_amount?.message}
                      disabled
                    />
                    <StyledTextField
                      label="Wallet Amount"
                      sx={{ width: "100%",marginBottom: 2  }}
                      {...register("wallet_amount", {
                        required: "Wallet Amount is required",
                        valueAsNumber: true,
                        min: {
                          value: 0.01,
                          message: "Wallet Amount must be greater than 0",
                        },
                      })}
                      error={!!errors.wallet_amount}
                      helperText={errors.wallet_amount?.message}
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => setOpenEditWalletDialog(false)}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleSubmit(onSubmit)} color="primary">
                    Submit
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

export default ViewVendor;
