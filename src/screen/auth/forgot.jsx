import React from "react";
import { Typography, Grid, Avatar, Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  StyledBox,
  StyledContainer,
  StyledButton,
  StyledTextField,
  styles,
} from "../../Styles/ComponentStyles/LoginStyles";
import { ScaleLoader } from "react-spinners";
import Logo from "../../image/logo.png";
import { CheckCircle, Cancel } from "@mui/icons-material"; // Import icons
import "../../Styles/login.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState("");
  const [dialogSuccess, setDialogSuccess] = React.useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    
      const isEmailValid = data.email === "sampleyaa@gmail.com"; 
      if (isEmailValid) {
        setDialogMessage("Password reset link sent to your email!");
        setDialogSuccess(true);
      } else {
        setDialogMessage("Email not found! Please check your email.");
        setDialogSuccess(false);
      }
      setOpenDialog(true);
      form.reset();
    }, 3000); 
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    if (dialogSuccess) {
      navigate("/otp");
    }
  };

  return (
    <StyledBox>
      <StyledContainer maxWidth="xs">
        <Grid container spacing={2} className="forgot-password-page">
          <Grid item xs={12} align="center">
            <Avatar src={Logo} className="avatar" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
              Forgot Password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Email"
              id="email"
              size="small"
              fullWidth
              {...register("email", {
                required: {
                  value: true,
                  message: "Missing Field Email",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Invalid Email",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledButton
              variant="contained"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Sending..." : "Send Reset Link"}
            </StyledButton>
          </Grid>
          <Grid item xs={12} align="center">
            <Link to="/" style={styles.forgotPassword}>
              <Typography variant="body2" align="center" padding="8px" gutterBottom>
                Back to Login
              </Typography>
            </Link>
          </Grid>
        </Grid>
        {loading && (
          <>
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              backgroundColor="rgba(255, 255, 255, 0.1)"
              style={{ backdropFilter: "blur(8px)", zIndex: 1 }}
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              style={{ transform: "translate(-50%, -50%)", zIndex: 2 }}
            >
              <ScaleLoader size={50} color="#1d7f41" />
            </Box>
          </>
        )}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>
            {dialogSuccess ? <CheckCircle style={{ color: "green" }} /> : <Cancel style={{ color: "red " }} />}
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" align="center">
              {dialogMessage}
            </Typography>
          </DialogContent>
        </Dialog>
      </StyledContainer>
    </StyledBox>
  );
};

export default ForgotPassword;