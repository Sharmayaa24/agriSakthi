import { Box, IconButton, Typography, Grid } from "@mui/material";
import StatBox from "./common/graph/StatBox";
import { mockTransactions } from "./common/graph/Data";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "./common/graph/linegraph";
import BarChart from "./common/graph/bargraph";
import { DataGrid } from "@mui/x-data-grid";
import {getColumnWidth } from "../Styles/datagridMQ"


const Dashboard = () => {
  return (
    <Box className="dashboard-container">
      {/* GRID & CHARTS */}
      <Grid container spacing={2}>
        {/* ROW 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box className="stat-box">
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase={<span style={{ color: "red" }}>-14%</span>}
              icon={<EmailIcon sx={{ color: "#1976d2", fontSize: "26px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className="stat-box">
            <StatBox
              title="431,225"
              subtitle="Sales Obtained"
              progress="0.50"
              increase={<span style={{ color: "green" }}>+21%</span>}
              icon={<PointOfSaleIcon sx={{ color: "#388e3c", fontSize: "26px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className="stat-box">
            <StatBox
              title="32,441"
              subtitle="New Clients"
              progress="0.30"
              increase={<span style={{ color: "red" }}>+5%</span>}
              icon={<PersonAddIcon sx={{ color: "#f57c00", fontSize: "26px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className="stat-box">
            <StatBox
              title="1,325"
              subtitle="Traffic Received"
              progress="0.80"
              increase={<span style={{ color: "green" }}>+43%</span>}
              icon={<TrafficIcon sx={{ color: "#d32f2f", fontSize: "26px" }} />}
            />
          </Box>
        </Grid>

        {/* ROW 2 */}
        <Grid item xs={12} md={8}>
          <Box className="payment-activity">
            <Box mt="25px" p="30px 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" fontWeight="600" className="chart-title" mb={"10px"}>
                Payment Activity
              </Typography>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: "#3f51b5" }} />
              </IconButton>
            </Box>
            <Box height={"550px"} m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box className="recent-transactions">
            <Box className="transaction-header">
            <Typography variant="h5" fontWeight="600" className="chart-title">
                Recent Transaction
            </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box key={`${transaction.txId}-${i}`} className="transaction-item">
                <Box>
                  <Typography color="#000" variant="h5" fontWeight="600">
                    {transaction.txId}
                  </Typography>
                  <Typography color="#757575">{transaction.user}</Typography>
                </Box>
                <Box className="transaction-date">{transaction.date}</Box>
                <Box className="transaction-cost">
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* ROW 3 */}
        <Grid item xs={12} md={6}>
          <Box className="new-clients">
          <Typography variant="h5" fontWeight="600" className="chart-title1" >
              New Client
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt="20px">
              <DataGrid
                rows={[
                  { id: 1, name: "John Doe", email: "john.doe@example.com" },
                  { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
                  { id: 3, name: "Bob Smith", email: "bob.smith@example.com" },
                ]}
                columns={[
                  { field: "id", headerName: "ID", width: getColumnWidth("id") },
                  { field: "name", headerName: "Name", width: getColumnWidth("name")},
                  { field: "email", headerName: "Email", width: getColumnWidth("email") },
                ]}
                pageSize={5}
                rowsPerPageOptions={[5]}
                sx={{ backgroundColor: "#fff", color: "#000" }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className="sales-quantity">
            <Typography variant="h5" fontWeight="600" className="chart-title">
              Sales Quantity
            </Typography>
            <Box height="550px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;