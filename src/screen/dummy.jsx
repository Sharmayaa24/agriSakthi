// const columns = (handleDeleteRow, handleAddWallet) => [
//   { field: "customer_serial_no", headerName: "Vendor ID", width: getColumnWidth("CustomerId") },
//   { field: "first_name", headerName: "First Name", width: getColumnWidth("FirstName") },
//   { field: "last_name", headerName: "Last Name", width: getColumnWidth("LastName") },
//   { field: "email", headerName: "Email", width: getColumnWidth("Email") },
//   { field: "phone", headerName: "Phone Number", width: getColumnWidth("PhoneNumber") },
//   { field: "Wallet", headerName: "Wallets", width: getColumnWidth("Actions"),
//     renderCell: (params) => (
//       <div>
//            <Button onClick={() => handleAddWallet(params.row)}>Add wallet</Button>
//            <Button onClick={() => setOpenDialog(true)}>Edit wallet</Button>
//       </div>
//     ),
//   },

//   {
//     field: "actions",
//     headerName: "Actions",
//     width: getColumnWidth("Actions"),
//     renderCell: (params) => (
//       <ActionMenu user={params.row} onDelete={handleDeleteRow} />
//     ),
//   },
// ];

// const ViewVendor = () => {
//   const [selection, setSelection] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [vendorToDelete, setVendorToDelete] = useState(null);
//   const [openAddWalletDialog, setOpenAddWalletDialog] = useState(false);
//   const [walletData, setWalletData] = useState({});

//   const customerData = useSelector((state) => state.customer.viewAllCustomer.data);
//   const customerList = customerData?.data || [];
//   const totalRecords = customerData?.totalRecords || 0;
//   const vendorPageSize = customerData?.pagesize || 10;

//   const handleDeleteRow = (id) => {
//     setVendorToDelete(id);
//     setOpenDialog(true);
//   };

//   const handleAddWallet = (row) => {
//     setWalletData(row);
//     setOpenAddWalletDialog(true);
//   };

//   const confirmDelete = () => {
//     if (vendorToDelete) {
//       console.log(vendorToDelete, "data");
//       dispatch(deleteCustomerProgress(vendorToDelete));
//       setRows((prevRows) => prevRows.filter((row) => row.id !== vendorToDelete));
//       setVendorToDelete(null);
//       setOpenDialog(false);
//       dispatch(viewAllCustomerProgress(currentPage));
//     }
//   };

//   const handleFilterClick = (event) => {
//     setFilterAnchorEl(event.currentTarget);
//   };

//   const handleAddVendor = () => {
//     navigate(APP_LINK.PARTICULARCUSTOMER);
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

//   const handleAddWalletSubmit = () => {
//     console.log(walletData);
//     setOpenAddWalletDialog(false);
//   };

//   return (
//     <>
//       <Grid container spacing={2} padding={2}>
//         <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
//           <Box>
//             <h1>Customer</h1>
//             <p>Here is your customer list data</p>
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
//       <Box padding={3}>
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
//         {loading && ( 
//           <Box
//             position="absolute"
//             top={0}
//             left={0}
//             right={0}
//             bottom={0}
//             bgcolor="rgba(255, 255, 255, 0.5)" 
//             zIndex={1000} 
//           >
//             <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//               <CircleLoader loading={loading} size={50} color="#1d7f41" />
//             </Box>
//           </Box>
//         )}
//         {!loading && (
//           <>
//             <StyledDataGrid
//               rows={customerList}
//               columns={columns(handleDeleteRow, handleAddWallet)}
//               pageSize={vendorPageSize}
//               pagination={false}
//               onSelectionModelChange={(newSelection) => {
//                 setSelection(newSelection);
//               }}
//             />
//             {selection.length > 0 && (
//               <div>
//                 <h2>Selected Rows:</h2>
//                 {selection.map((id) => (
//                   <div key={id}>
//                     {rows.find((row) => row.id === id)?.first_name}
//                   </div>
//                 ))}
//               </div>
//             )}
//             <Box
//               className="button-box"
//               padding={{ xs: 1, sm: 3 }}
//               display="flex"
//               justifyContent="end"
//             >
//               <Button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 sx={paginationStyles.PreviousButton}
//               >
//                 &lt;&lt; Previous
//               </Button>
//               <Box sx={{ backgroundColor: "#e3e4eb" }}>
//                 {Array.from(
//                   { length: Math.ceil(totalRecords / vendorPageSize) },
//                   (_, i) => i + 1
//                 ).map((pageNumber) => (
//                   <Button
//                     key={pageNumber}
//                     onClick={() => setCurrentPage(pageNumber)}
//                     sx={{
//                       backgroundColor:
//                         currentPage === pageNumber ? "#fff" : "#e3e4eb",
//                       color: currentPage === pageNumber ? "#000" : "#b6bee8",
//                       ...paginationStyles.arrayButtons,
//                     }}
//                   >
//                     {pageNumber}
//                   </Button>
//                 ))}
//               </Box>
//               <Button
//                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(totalRecords / vendorPageSize)))}
//                 sx={paginationStyles.nextButton}
//               >
//                 Next &gt;&gt;
//               </Button>
//             </Box>
//             <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//               <DialogTitle>Confirm Delete</DialogTitle>
//               <DialogContent>
//                 Are you sure you want to delete this row?
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={() => setOpenDialog(false)} color="primary">
//                   Cancel
//                 </Button>
//                 <Button onClick={confirmDelete} color="primary">
//                   OK
//                 </Button>
//               </DialogActions>
//             </Dialog>
//             <Dialog open={openAddWalletDialog} onClose={() => setOpenAddWalletDialog(false)}>
//               <DialogTitle>Add Wallet</DialogTitle>
//               <DialogContent>
//                 <Box>
//                   <TextField label="Wallet Name" />
//                   <TextField label="Wallet Type" />
//                   <TextField label="Wallet Balance" />
//                 </Box>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={() => setOpenAddWalletDialog(false)} color="primary">
//                   Cancel
//                 </Button>
//                 <Button onClick={handleAddWalletSubmit} color="primary">
//                   Submit
//                 </Button>
//               </DialogActions>
//             </Dialog>
//           </>)
//         )}
//       </StyledContainer>
//       </Box>
//     </>
//   );
// };