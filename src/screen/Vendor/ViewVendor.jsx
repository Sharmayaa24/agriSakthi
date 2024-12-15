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
import "../../Styles/style.css"

import {
  StyledContainer,
  StyledDataGrid,
  paginationStyles,
} from "../../Styles/ComponentStyles/style";
import { getColumnWidth } from "../../Styles/datagridMQ";
import {APP_LINK}from "../../screen/common/sakthiMenu"

const dummyData =()=> [
  {
    "id": 1,
    "Vendor Id": "Customer 1",
    "First Name": "John 1",
    "Last Name": "Doe 1",
    "Email": "john1@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 2,
    "Vendor Id": "Customer 2",
    "First Name": "John 2",
    "Last Name": "Doe 2",
    "Email": "john2@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 3,
    "Vendor Id": "Customer 3",
    "First Name": "John 3",
    "Last Name": "Doe 3",
    "Email": "john3@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 4,
    "Vendor Id": "Customer 4",
    "First Name": "John 4",
    "Last Name": "Doe 4",
    "Email": "john4@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 5,
    "Vendor Id": "Customer 5",
    "First Name": "John 5",
    "Last Name": "Doe 5",
    "Email": "john5@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 6,
    "Vendor Id": "Customer 6",
    "First Name": "John 6",
    "Last Name": "Doe 6",
    "Email": "john6@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 7,
    "Vendor Id": "Customer 7",
    "First Name": "John 7",
    "Last Name": "Doe 7",
    "Email": "john7@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 8,
    "Vendor Id": "Customer 8",
    "First Name": "John 8",
    "Last Name": "Doe 8",
    "Email": "john8@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 9,
    "Vendor Id": "Customer 9",
    "First Name": "John 9",
    "Last Name": "Doe 9",
    "Email": "john9@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 10,
    "Vendor Id": "Customer 10",
    "First Name": "John 10",
    "Last Name": "Doe 10",
    "Email": "john10@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 11,
    "Vendor Id": "Customer 11",
    "First Name": "John 11",
    "Last Name": "Doe 11",
    "Email": "john11@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 12,
    "Vendor Id": "Customer 12",
    "First Name": "John 12",
    "Last Name": "Doe 12",
    "Email": "john12@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 13,
    "Vendor Id": "Customer 13",
    "First Name": "John 13",
    "Last Name": "Doe 13",
    "Email": "john13@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 14,
    "Vendor Id": "Customer 14",
    "First Name": "John 14",
    "Last Name": "Doe 14",
    "Email": "john14@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  },
  {
    "id": 15,
    "Vendor Id": "Customer 15",
    "First Name": "John 15",
    "Last Name": "Doe 15",
    "Email": "john15@example.com",
    "PhoneNumber": "123-456-7890",
    "Address": "123 Main St, Anytown, USA"
  }
]


const columns = (handleDeleteRow) => [

  { field: "Vendor Id", headerName: "VendorId", width: getColumnWidth("CustomerId") },
  { field: "First Name", headerName: "FirstName", width: getColumnWidth("FirstName") },
  {
    field: "Last Name",
    headerName: "LastName",
    width: getColumnWidth("LastName"),
  },
  { field: "Email", headerName: "email", width: getColumnWidth("Email") },
  { field: "PhoneNumber", headerName: "Phone Number", width: getColumnWidth("PhoneNumber") },
  { field: "Address", headerName: "Address", width: getColumnWidth("Address") },
  
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
  const navigator =useNavigate();

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

const ViewVendor = () => {
  const [rows, setRows] = useState(dummyData());
  const [selection, setSelection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [openDialog, setOpenDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const navigator = useNavigate();

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
    navigator(APP_LINK.ADDVENDOR);
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

  const paginatedRows = rows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box>
            <h1>View Vendor </h1>
            <p>Here is your Vendor list data</p>
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
        <StyledDataGrid
          rows={paginatedRows}
          columns={columns(handleDeleteRow)}
          pageSize={rowsPerPage}
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
              { length: Math.ceil(rows.length / rowsPerPage) },
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
                Math.min(prev + 1, Math.ceil(rows.length / rowsPerPage))
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
      </StyledContainer>
    </>
  );
};

export default ViewVendor;
