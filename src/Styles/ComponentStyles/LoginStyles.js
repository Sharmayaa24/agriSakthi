import { Box, styled } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F9F9F9",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: "30px 40px",
  borderRadius: "8px",
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1d7f41",
  borderRadius: "20px",
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#1d7f41",
  },
}));
export const StyledButton1 = styled(Button)(({ theme }) => ({
  backgroundColor: "#de7160",
  borderRadius: "20px",
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#de7160",
  },
}));
export const StyledButton2 = styled(Button)(({ theme }) => ({
  backgroundColor: "#0866FF",
  borderRadius: "20px",
  color: "#FFF",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#06214B",
  },
}));
export const styles = {
  loginDirectly: {
    marginTop: "20px",
    textDecoration: "none",
    color: "black",
  },
  forgotPassword: {
    textDecoration: "none",
    color: "black",
  },
};

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "10px 10px",
    "& input": {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.4375em",
      letterSpacing: "0.00938em",
      color: "#282828",
      height: "10px",
      border: "none",
      outline: "none",
    },
    "& fieldset": {
      padding: 10,
      borderRadius: "5px",
      border: "2px solid #282828",
    },
    "&:hover fieldset": {
      border: "2px solid #282828",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #282828",
    },
  },
  "& label": {
    margin: "7px",
    fontSize: "13px",
    color: "#282828",
  },
  "& label.Mui-focused": {
    color: "#282828",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ccc",
  },
  "& .MuiOutlinedInput-notchedOutline.Mui-focused": {
    borderColor: "#333",
  },
  "& .MuiOutlinedInput-notchedOutline.Mui-error": {
    borderColor: "#F44336",
  },
  "& .MuiOutlinedInput-notchedOutline.Mui-disabled": {
    borderColor: "#ccc",
  },
  "&.Mui-error": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F44336",
    },
    "& label": {
      color: "#282828",
    },
  },
  "&.Mui-disabled": {
    "& input": {
      backgroundColor: "#F5F5F5",
      color: "#A0A0A0",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
  },
}));
