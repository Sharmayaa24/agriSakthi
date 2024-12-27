import {
  Box,
  Typography,
  Grid,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  Table
} from '@mui/material'
import StatBox from './common/graph/StatBox'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import SalesReportGraph from './common/graph/datagraph'

const transactions = [
  { id: '#12345', name: 'John Doe', amount: '₹100.00' },
  { id: '#67890', name: 'Jane Doe', amount: '₹200.00' },
  { id: '#34567', name: 'Bob Smith', amount: '₹100.00' },
  { id: '#90123', name: 'Alice Johnson', amount: '₹75.00' },
  { id: '#45678', name: 'Mike Brown', amount: '₹25.00' },
  { id: '#45678', name: 'Mike Brown', amount: '₹25.00' }
]
const customers = [
  {
    id: '#12345',
    name: 'John Doe',
    email: 'john.doe@example.com',
    totalAmount: 100,
    paidAmount: 50
  },
  {
    id: '#67890',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    totalAmount: 200,
    paidAmount: 150
  },
  {
    id: '#34567',
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    totalAmount: 100,
    paidAmount: 75
  },
  {
    id: '#90123',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    totalAmount: 75,
    paidAmount: 50
  },
  {
    id: '#45678',
    name: 'Mike Brown',
    email: 'mike.brown@example.com',
    totalAmount: 25,
    paidAmount: 10
  },
  {
    id: '#45678',
    name: 'Mike Brown',
    email: 'mike.brown@example.com',
    totalAmount: 25,
    paidAmount: 10
  }
]
const VendorDashboard = () => {
  console.log('hello')
  return (
    <Box className='dashboard-container'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box className='stat-box'>
            <StatBox
              title='12,361'
              subtitle='Total Users'
              progress='0.75'
              increase={<span style={{ color: 'red' }}>-14%</span>}
              icon={<EmailIcon sx={{ color: '#1976d2', fontSize: '26px' }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className='stat-box'>
            <StatBox
              title='431,225'
              subtitle='Total Amount'
              progress='0.50'
              increase={<span style={{ color: 'green' }}>+21%</span>}
              icon={
                <PointOfSaleIcon sx={{ color: '#388e3c', fontSize: '26px' }} />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className='stat-box'>
            <StatBox
              title='32,441'
              subtitle='Total Payments'
              progress='0.30'
              increase={<span style={{ color: 'red' }}>+5%</span>}
              icon={
                <PersonAddIcon sx={{ color: '#f57c00', fontSize: '26px' }} />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className='stat-box'>
            <StatBox
              title='1,325'
              subtitle='Total Users'
              progress='0.80'
              increase={<span style={{ color: 'green' }}>+43%</span>}
              icon={<TrafficIcon sx={{ color: '#d32f2f', fontSize: '26px' }} />}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} pt={2}>
        <Grid item xs={12} md={6}>
          <Paper className='graph-container'>
            <Typography
              variant='h6'
              className='graph-title'
              pt={2}
              pl={2}
              pb={2}
              fontWeight={'bold'}
            >
              Transaction Overview
            </Typography>
            <SalesReportGraph sx={{ overflow: 'hidden' }} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className='graph-container'>
            <Typography
              variant='h6'
              className='graph-title'
              pt={5}
              pl={2}
              pb={2}
              fontWeight={'bold'}
            >
              Recent Transactions
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                      Transaction ID
                    </TableCell>
                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                      Name
                    </TableCell>
                    <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map((transaction, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {transaction.id}
                      </TableCell>
                      <TableCell align='center'>{transaction.name}</TableCell>
                      <TableCell align='center'>{transaction.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid container spacing={2} pt={2}>
          <Grid item xs={12} md={12}>
            <Paper>
              <Typography
                variant='h6'
                className='graph-title'
                pt={5}
                pl={2}
                pb={2}
                fontWeight={'bold'}
              >
                Users
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                        Transaction ID
                      </TableCell>
                      <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                        Name
                      </TableCell>
                      <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                        Email
                      </TableCell>
                      <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                        Amount
                      </TableCell>
                      <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                        Paid Amount
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customers.map((transaction, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 }
                        }}
                      >
                        <TableCell component='th' scope='row' align='center'>
                          {transaction.id}
                        </TableCell>
                        <TableCell align='center'>{transaction.name}</TableCell>
                        <TableCell align='center'>
                          {transaction.email}
                        </TableCell>
                        <TableCell align='center'>
                          {transaction.totalAmount}
                        </TableCell>
                        <TableCell align='center'>
                          {transaction.paidAmount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default VendorDashboard
