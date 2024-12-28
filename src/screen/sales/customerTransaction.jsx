import React, { useState } from "react";

import {
  Box,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import "../../Styles/style.css";

import {
  StyledContainer,
  paginationStyles,
} from "../../Styles/ComponentStyles/style";
// import { getColumnWidth } from "../../Styles/datagridMQ";
import { useSelector, useDispatch } from "react-redux";
import { CircleLoader } from "react-spinners";
import { viewParticularCustomerTransactionProgress} from "../../redux/transaction/transactionAction";



const VendorPaymentList = () => {
  // const [rows, setRows] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const customerTransactionData = useSelector(
    (state) => state.transaction?.particularCustomerViewTransaction?.data
  );
  console.log(customerTransactionData);
  const [CustomerList, setCustomerList] = useState([]);
  const customerList = customerTransactionData?.data || [];
  const totalRecords = customerTransactionData?.totalRecords || 0;
  const transactionPageSize = customerTransactionData?.pagesize || 10;

  
  const preprocessData = (data) => {
    setLoading(false);
    if (!data) {
      return [];
    }
    if (!Array.isArray(data)) {
      data = [data];
    }
    const updateData = data.map((item) => {
      const sale = item.Sale;
      if (!Array.isArray(sale)) {
        item.Sale = [sale];
      }
      return item.Sale.map((saleItem, index) => {
        return {
          id: index + 1,
          TransactionId: item.transaction_serial_no || "",
          CustomerName: item.customer_name || "",
          VendorName: item.vendor_name || "",
          TotalAmount: item.price || 0,
          AmountPaid: saleItem.price || 0,
          CreatedDate: formatDateTime(item.created_at) || "",
          PaidDate: formatDateTime(saleItem.date) || "",
          Status: saleItem.status || "Unpaid",
        };
      });
    }).flat();
    return updateData;
  };
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  React.useEffect(() => {
    setLoading(true);
    const customerId = "1dc1e994-66d9-43f4-b34a-6dbd4c225f4f";
    dispatch(viewParticularCustomerTransactionProgress(customerId));
  }, [currentPage]);

  React.useEffect(() => {
    const updatedVendorList = preprocessData(customerTransactionData.data);
    setCustomerList(updatedVendorList);
    setLoading(false);
    console.log(customerTransactionData);
    console.log(totalRecords);
    
  }, [customerTransactionData]);

  return (
    <Box padding={3}>
      <Grid container spacing={2} padding={5}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box>
            <h2>CUSTOMER TRANSACTIONS</h2>
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

          </Box>
        </Grid>
      </Grid>
      <StyledContainer>
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
            <Box padding={3}>
              <Box
                sx={{
                  boxShadow: 3,
                  width: "100%",
                  maxHeight: "100%",
                  overflowX: "auto",
                  overflowY: "hidden",
                  padding: "30px",
                }}
              >
                <Table stickyHeader aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          backgroundColor: "#1D7F41",
                          color: "#fff",
                          fontWeight: "bold",
                          textAlign:'center'
                        }}
                      >
                        Transaction Id
                      </TableCell>
                      <TableCell
                        sx={{
                          backgroundColor: "#1D7F41",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        Customer Name
                      </TableCell>
                      <TableCell
                        sx={{
                          backgroundColor: "#1D7F41",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        Vendor Name
                      </TableCell>
                      <TableCell
                        sx={{
                          backgroundColor: "#1D7F41",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        TotalAmount
                      </TableCell>
                      <TableCell
                        sx={{
                          backgroundColor: "#1D7F41",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        AmountPaid
                      </TableCell>
                      <TableCell
                        sx={{
                          backgroundColor: "#1D7F41",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        CreatedDate
                      </TableCell>
                      <TableCell
                        sx={{
                          backgroundColor: "#1D7F41",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        PaidDate
                      </TableCell>
                      <TableCell
                        sx={{
                          backgroundColor: "#1D7F41",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {CustomerList?.map((row) => (
                      
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {/* <TableCell component="th" scope="row" align="center">
                          {row.vendor_serial_no}
                        </TableCell> */}
                        <TableCell align="center">{row.TransactionId}</TableCell>
                        <TableCell align="center">{row.CustomerName}</TableCell>
                        <TableCell align="center">{row.VendorName}</TableCell>
                        <TableCell align="center">{row.TotalAmount}</TableCell>
                        <TableCell align="center">{row.AmountPaid}</TableCell>
                         <TableCell align="center">{row.CreatedDate}</TableCell> 
                        <TableCell align="center">{row.PaidDate}</TableCell>
                         <TableCell align="center">{row.Status}</TableCell> 
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Box>
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
          </>
        )}
      </StyledContainer>
    </Box>
  );
};

export default VendorPaymentList;
