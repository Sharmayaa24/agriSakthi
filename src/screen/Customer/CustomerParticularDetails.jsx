import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/AutoFixHigh'; 
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { viewParticularVendorProgress} from "../../redux/Vendor/vendorAction"; 
import { viewCustomerProgress } from '../../redux/Customer/customerAction';

const tableStyle = {
  headingStyle: {
    backgroundColor: '#ccc',
    fontWeight: 'bold',
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    fontSize: "18px",
  },
  bottomStyle: {
    backgroundColor: '#ccc',
    fontWeight: 'bold',
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    fontSize: "18px",
  },
  centerRow: {
    backgroundColor: '#ccc',
    fontWeight: 'bold',
    fontSize: "18px",
  },
  ButtonFlex: {
    display: 'flex',
    justifyContent: "end",
    gap: "5px",
    paddingTop: "10px",
  },
  editButton: {
    color: "white",
    backgroundColor: "#489767",
    fontWeight: "bold",
  },
  deleteButton: {
    color: "white",
    backgroundColor: "#febfb2",
    fontWeight: "bold",
  },
  boxFlex:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50vh',
    backgroundColor: '#f5f5f5',
  }
};

const CustomerTable = () => {
     const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
      const { id } = useParams();
      console.log(id,"id")
      const getCustomerData = useSelector((state) => state.customer?.ViewCustomer.data);
      console.log(getCustomerData,"all")
    const customerList = getCustomerData?.data || [];
    React.useEffect(() => {
      dispatch(viewCustomerProgress(id));
    }, [dispatch, id]);

    const handleClose = () => {
        setAnchorEl(null);
      };
  const handleEdit = () => {
    navigate(`/vendor/edit/${id}`, { 
      });
    
    handleClose();
  };
  const handleBack=()=>{

  }
  
  return (
    <Box
      sx={{
        ...tableStyle.boxFlex
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: '90%',
        }}
      >
        <Typography variant="h4" align="start" gutterBottom marginBottom={5}>
          User Details
        </Typography>
        <TableContainer
          
        >
          <Table>
            <TableBody
            sx={{
              overflowX: 'auto', 
              width: '100%',     
            }}
            >
              <TableRow>
                <TableCell sx={{ ...tableStyle.centerRow }}>First Name :</TableCell>
                <TableCell>{customerList.first_name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ ...tableStyle.centerRow }}>Last Name :</TableCell>
                <TableCell>{customerList.last_name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ ...tableStyle.centerRow }}>Address :</TableCell>
                <TableCell>{customerList.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ ...tableStyle.centerRow }}>Email:</TableCell>
                <TableCell>{customerList.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ ...tableStyle.bottomStyle }}>Phone Number :</TableCell>
                <TableCell>{customerList.phone}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ ...tableStyle.ButtonFlex }}>
          <Button
            startIcon={<EditIcon />}
            variant="contained"
            sx={{ ...tableStyle.editButton }}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="contained"
            sx={{ ...tableStyle.deleteButton }}
            onClick={handleBack}
          >
            Delete
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CustomerTable;