import { Button, TextField, Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "30px 40px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.1)",
  maxWidth: "800px",
  margin: "0 auto",
  border: "none",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1d7f41",
  padding: 0,
  borderRadius: "20px",
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#06214B",
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "20px 10px",
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
      border: "2px solid #ccc",
    },
    "&:hover fieldset": {
      border: "2px solid #ccc",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #ccc",
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

export const styles = {
  title: {
    paddingTop: "15px",
    color: "#3E4954",
    fontWeight: "bold",
  },
  image: {
    borderRadius: "4px",
  },
  photoHeading: {
    color: "grey",
    marginLeft: "5px",
  },
  fileButtonContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: 2,
    fontSize: "16px",
  },
  chooseFileButton: {
    backgroundColor: "#fff",
    color: "#7894f7",
    borderColor: "#7894f7",
    fontWeight: "bold",
  },
  fileNameButton: (selectedFile) => ({
    backgroundColor: "#F8FCFF",
    color: "#063af8ba",
    fontWeight: "bold",
    pointerEvents: selectedFile ? "none" : "auto",
  }),
  saveButtonContainer: {
    display: "flex",
    justifyContent: "end",
    fontSize: "16px",
  },
  saveButton: {
    backgroundColor: "#2F4CDD",
    color: "#fff",
    fontWeight: "bold",
  },
  textFieldContainer: {
    mt: 3,
    mb: 1,
    color: "#000",
  },
  submitGap: {
    mt: 4,
    mb: 3,
  },
  submitButtonContainer: {
    mt: 4,
    mb: 3,
    textAlign: "center",

    backgroundColor: "#1d7f41",
    color: "white",
    fontWeight: "bold",
    width: "150px",
    height: "40px",
    margin: "1 5px",
    marginTop: 2,
    display: " flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    padding: "0",
    textAlign: "center",
    textTransform: "none",
  },
};

//Permission Styles
export const containerStyles = {
  padding: { xs: "20px", md: "30px" },
};

export const tableContainerStyles = {
  borderRadius: "8px",
  overflowX: "auto",
  overflowY: "hidden",
};

export const tableStyles = {
  borderCollapse: "separate",
  borderSpacing: "0",
  height: "100%",
};

export const tableCellHeaderStyles = {
  fontWeight: "bold",
  textAlign: "center",
  border: "none",
};

export const tableCellBodyStyles = (index, rowIndex, rolesLength) => ({
  borderRight: index === 2 ? "2px solid #cad1f5" : "none",
  borderBottom: rowIndex === rolesLength - 1 ? "2px solid #cad1f5" : "none",
  borderTop: rowIndex === 0 ? "2px solid #cad1f5" : "none",
});

export const tableRowLabelCellStyles = {
  textAlign: "center",
  border: "none",
  borderRight: "2px solid #cad1f5",
  fontWeight: "bold",
};

export const stackStyles = {
  paddingTop: "50px",
};

export const paperStyles = {
  padding: "8px",
  backgroundColor: "#2f4cdd",
  color: "#fff",
  borderRadius: "16px",
};

export const typographyBody1Styles = {
  fontWeight: "bold",
};
export const paginationStyles = {
  PreviousButton: {
    backgroundColor: "#2f4cdd",
    color: "white",
    fontWeight: "bold",
    width: { xs: "100px", sm: "130px" },
    height: "40px",
    margin: "0 10px",
    "&:hover": {
      backgroundColor: "#2f4cdd",
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
    backgroundColor: "#2f4cdd",
    color: "white",
    fontWeight: "bold",
    width: { xs: "100px", sm: "100px" },
    height: "40px",
    margin: "0 10px",
  },
};
