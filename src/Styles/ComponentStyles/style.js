import { Container, TextField, Button, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "30px 40px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  background: "#fff",
  maxWidth: "100%",
  margin: "0 auto",
  border: "none",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

export const StyledDataGrid = styled(DataGrid)({
  border: "none",
  overflowx: "auto",

  "& .MuiDataGrid-columnHeaders": {
    background: "#fff",
    backgroundColor: "#fff",
    color: "#404040",
    fontSize: "16px",
    borderBottom: "none",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "#fff",
    color: "#3e4954",
    fontSize: "14px",
    borderBottom: "none",
  },
  "& .MuiDataGrid-cell": {
    border: "none",
  },
  "& .MuiTablePagination-root": {
    backgroundColor: "#fff",
    display: "none",
    padding: 0,
    margin: 0,
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#fff",

    display: "none",
  },
});
export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f9f9f9",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledContainers = styled(Container)(({ theme }) => ({
  padding: "30px 40px",
  borderRadius: "8px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#06214b",
  borderRadius: "20px",
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#06214b",
  },
}));
export const StyledButton1 = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
  color: "#9f9f9f",
  fontWeight: "bold",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

  "&:hover": {
    backgroundColor: "#06214b",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
}));
export const StyledButton2 = styled(Button)(({ theme }) => ({
  backgroundColor: "#0866ff",
  borderRadius: "20px",
  color: "#FFF",
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: "#06214b",
  },
}));
//#0866ff
export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "#fff",
    borderRadius: "4px",
    padding: "20px 10px",
    "& input": {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.4375em",
      letterSpacing: "0.00938em",
      color: "rgba(0, 0, 0, 0.87)",
      height: "10px",
      border: "none",
      outline: "none",
    },
    "& fieldset": {
      padding: 10,
      borderRadius: "10px",
      border: "2px solid #d8dee6",
    },
    "&:hover fieldset": {
      border: "2px solid #d8dee6",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #d8dee6",
    },
  },
  "& label": {
    fontSize: "13px",
    color: "#a0a0a0",
  },
  "& label.Mui-focused": {
    color: "#333",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ccc",
  },
  "& .MuiOutlinedInput-notchedOutline.Mui-focused": {
    borderColor: "#333",
  },
  "& .MuiOutlinedInput-notchedOutline.Mui-error": {
    borderColor: "#f44336",
  },
  "& .MuiOutlinedInput-notchedOutline.Mui-disabled": {
    borderColor: "#ccc",
  },
  "&.Mui-error": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f44336",
    },
    "& label": {
      color: "#f44336",
    },
  },
  "&.Mui-disabled": {
    "& input": {
      backgroundColor: "#f5f5f5",
      color: "#a0a0a0",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
  },
}));
export const paginationStyles = {
  PreviousButton: {
    backgroundColor: "#1d7f41",
    color: "white",
    fontWeight: "bold",
    fontSize: { xs: "12px", sm: "14px" },
    width: { xs: "100px", sm: "130px" },
    height: "40px",
    margin: "0 10px",
    "&:hover": {
      backgroundColor: "#1d7f41",
    },
  },
  arrayButtons: {
    borderRadius: "5px",
    width: { xs: "5px", sm: "10px" },
    height: "30px",
    border: "none",
    cursor: "pointer",
    margin: { xs: "2px 2px", sm: "5px 5px" },
    minWidth: "34px",
    display: {
      xs: "none",
      sm: "none",
      md: "inline",
      lg: "inline",
      xl: "inline",
    },
  },
  nextButton: {
    backgroundColor: "#1d7f41",
    color: "white",
    fontWeight: "bold",
    fontSize: { xs: "12px", sm: "14px" },
    width: { xs: "100px", sm: "100px" },
    height: "40px",
    margin: "0 10px",
  },
};
