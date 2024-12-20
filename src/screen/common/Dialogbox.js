import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export const defaultStatus = {
  inProgress: false,
  success: false,
  error: false,
  data: [],
  message: null,
  errormessage: null,
};

const styles = {
  dialogTitle: {
    textAlign: "center",
    position: "relative",
  },
  closeIcon: {
    position: "absolute",
    right: 8,
    top: 8,
  },
  successIcon: {
    color: "green",
    fontSize: 60,
  },
  errorIcon: {
    color: "red",
    fontSize: 60,
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogButton: {
    backgroundColor: "#08234d",
    color: "#fff",
    marginBottom: "20px",
  },
};

const CommonDialog = ({
  open,
  isSuccess,
  onClose,
  //   titleSuccess = "Success!",
  //   titleError = "Error!",
  messageSuccess = "Your operation was successful!",
  messageError = "There was an error. Please try again.",
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={styles.dialogTitle}>
        {/* Close Icon */}
        <IconButton aria-label="close" onClick={onClose} sx={styles.closeIcon}>
          <CloseIcon />
        </IconButton>
        {isSuccess ? (
          <CheckCircleIcon sx={styles.successIcon} />
        ) : (
          <CancelIcon sx={styles.errorIcon} />
        )}
      </DialogTitle>
      <DialogContent sx={styles.dialogContent}>
        <Typography variant="body1" gutterBottom>
          {isSuccess ? messageSuccess : messageError}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}></DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
