// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   IconButton,
//   Menu,
//   MenuItem,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
// } from "@mui/material";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import FilterIcon from "@mui/icons-material/Tune";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   StyledContainer,
//   StyledDataGrid,
//   paginationStyles,
// } from "../../Styles/ComponentStyles/style";
// import { getColumnWidth } from "../../Styles/datagridMQ";
// import { APP_LINK } from "../../screen/common/sakthiMenu";
// import { viewVendorProgress, deleteVendorProgress } from "../../redux/Vendor/vendorAction";

// const columns = (handleDeleteRow) => [
//   { field: "id", headerName: "Vendor ID", width: getColumnWidth("CustomerId") },
//   { field: "first_name", headerName: "First Name", width: getColumnWidth("FirstName") },
//   { field: "last_name", headerName: "Last Name", width: getColumnWidth("LastName") },
//   { field: "email", headerName: "Email", width: getColumnWidth("Email") },
//   { field: "phone", headerName: "Phone Number", width: getColumnWidth("PhoneNumber") },
//   { field: "address", headerName: "Address", width: getColumnWidth("Address") },
//   {
//     field: "actions",
//     headerName: "Actions",
//     width: getColumnWidth("Actions"),
//     renderCell: (params) => (
//       <ActionMenu user={params.row} onDelete={handleDeleteRow} />
//     ),
//   },
// ];

// const ActionMenu = ({ user, onDelete }) => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const navigate = useNavigate();

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//     const handleEdit = () => {
//       navigate(`/vendor/edit/${user.id}`);
//       handleClose();
//     };  

//   const handleDelete = () => {
//     onDelete(user.id);
//       console.log(user.id,"edit")
//     handleClose();
//   };
//   const handleView = () => {
//     navigate(`/vendor/view/${user.id}`, {
//       state: {
//         vendor: user
//         }
//     });
//         handleClose();
//   };
//   return (
//     <>
//       <IconButton onClick={handleClick}>
//         <MoreHorizIcon />
//       </IconButton>
//       <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//       <MenuItem onClick={handleView}>View</MenuItem>
//         <MenuItem onClick={handleEdit}>Edit</MenuItem>
//         <MenuItem onClick={handleDelete}>Delete</MenuItem>
//       </Menu>
//     </>
//   );
// };

// const ViewVendor = (onDelete) => {
//   const [selection, setSelection] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [rows, setRows] = useState([]);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const vendorData = useSelector((state) => state.vendor?.viewVendors.data);
//   const vendorList = vendorData?.data || [];

//   const totalRecords = vendorData?.totalRecords || 0;
//   const vendorPageSize = vendorData?.pagesize || 10;

//   useEffect(() => {
//     dispatch(viewVendorProgress(currentPage));
//   }, [dispatch, currentPage]);

//   useEffect(() => {
//     if (vendorData?.success) {
//       setRows(vendorList);
//     } else {
//       setRows([]);
//     }
//   }, []);

//   const handleDeleteRow = (id) => {
//     setUserToDelete(id);
//     setOpenDialog(true);
//   };
//   const deleteVendorData = useSelector((state) => state.vendor?.deleteVendor.data);
//   console.log(deleteVendorData,"delete")
 
//   const confirmDelete = () => {
//     dispatch(deleteVendorProgress(userToDelete));
//     dispatch(viewVendorProgress(currentPage));
//     setRows((prevRows) => prevRows.filter((row) => row.id !== userToDelete));
//     setOpenDialog(false);
//     setUserToDelete(null);
//   };

  
//   const handleFilterClick = (event) => {
//     setFilterAnchorEl(event.currentTarget);
//   };

//   const handleAddVendor = () => {
//     navigate(APP_LINK.ADDVENDOR);
//   };

//   const handleFilterClose = () => {
//     setFilterAnchorEl(null);
//   };

//   const handleFilterCondition = (condition) => {
//     switch (condition) {
//       case "Condition1":
//         setRows((prevRows) =>
//           [...prevRows].sort((a, b) => a.first_name.localeCompare(b.first_name))
//         );
//         break;
//       case "Condition2":
//         setRows((prevRows) =>
//           [...prevRows].sort((a, b) => b.created_at.localeCompare(a.created_at))
//         );
//         break;
//       default:
//         console.log(`Unknown filter condition: ${condition}`);
//     }
//     handleFilterClose();
//   };

//   return (
//     <>
//       <Grid container spacing={2} padding={2}>
//         <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
//           <Box>
//             <h1>Vendors</h1>
//             <p>Here is your Vendor list data</p>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
//           <Box
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "20px",
//               marginTop: "20px",
//             }}
//           >
//             <Button
//               variant="contained"
//               onClick={handleAddVendor}
//               sx={{ backgroundColor: "#1d7f41", color: "#fff" }}
//             >
//               Add New
//             </Button>
//             <Button
//               variant="contained"
//               startIcon={<FilterIcon color="blue" />}
//               endIcon={<ExpandMoreIcon />}
//               onClick={handleFilterClick}
//               sx={{ backgroundColor: "#f4f5f9", color: "#dde0e4" }}
//             >
//               Filter
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//       <StyledContainer>
//         <Menu
//           anchorEl={filterAnchorEl}
//           open={Boolean(filterAnchorEl)}
//           onClose={handleFilterClose}
//         >
//           <MenuItem onClick={() => handleFilterCondition("Condition1")}>
//             First Name A-Z
//           </MenuItem>
//           <MenuItem onClick={() => handleFilterCondition("Condition2")}>
//             Created At Newest to Oldest
//           </MenuItem>
//         </Menu>
//         <StyledDataGrid
//           rows={vendorList}
//           columns={columns(handleDeleteRow)}
//           pageSize={vendorPageSize}
//           pagination={false}
//           onSelectionModelChange={(newSelection) => {
//             setSelection(newSelection);
//           }}
//         />
//         {selection.length > 0 && (
//           <div>
//             <h2>Selected Rows:</h2>
//             {selection.map((id) => (
//               <div key={id}>
//                 {rows.find((row) => row.vendor_serial_no === id)?.first_name}
//               </div>
//             ))}
//           </div>
//         )}
//         <Box
//           className="button-box"
//           padding={{ xs: 1, sm: 3 }}
//           display="flex"
//           justifyContent="end"
//         >
//           <Button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             sx={paginationStyles.PreviousButton}
//           >
//             &lt;&lt; Previous
//           </Button>
//           <Box sx={{ backgroundColor: "#e3e4eb" }}>
//             {Array.from(
//               { length: Math.ceil(totalRecords / vendorPageSize) },
//               (_, i) => i + 1
//             ).map((pageNumber) => (
//               <Button
//                 key={pageNumber}
//                 onClick={() => setCurrentPage(pageNumber)}
//                 sx={{
//                   backgroundColor:
//                     currentPage === pageNumber ? "#fff" : "#e3e4eb",
//                   color: currentPage === pageNumber ? "#000" : "#b6bee8",
//                   ...paginationStyles.arrayButtons,
//                 }}
//               >
//                 {pageNumber}
//               </Button>
//             ))}
//           </Box>
//           <Button
//             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(totalRecords / vendorPageSize)))}
//             sx={paginationStyles.nextButton}
//           >
//             Next &gt;&gt;
//           </Button>
//         </Box>
//         <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//           <DialogTitle>Confirm Delete</DialogTitle>
//           <DialogContent>
//             Are you sure you want to delete this row?
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setOpenDialog(false)} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={confirmDelete} color="primary">
//               OK
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </StyledContainer>
//     </>
//   );
// };

// export default ViewVendor;