import React from "react";
import { Typography, Grid, Avatar, Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  StyledBox,
  StyledContainer,
  StyledButton,
  StyledButton1,
  StyledTextField,
  styles,
} from "../../Styles/ComponentStyles/LoginStyles";
import { ScaleLoader } from "react-spinners";
import Logo from "../../image/logo.png";
import { CheckCircle, Cancel } from "@mui/icons-material"; 
import "../../Styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState("");
  const [dialogSuccess, setDialogSuccess] = React.useState(false);

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleSignin = () => {
    navigate("/register");
  };

  const form = useForm({
    defaultValues: {
      email: "sampleyaa@gmail.com",
      password: "pass",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const isSuccess = data.email === "sampleyaa@gmail.com" && data.password === "pass";
      if (isSuccess) {
        setDialogMessage("Login Successful!");
        setDialogSuccess(true);
        navigate("/dashboard");
      } else {
        setDialogMessage("Login Failed! Please check your credentials.");
        setDialogSuccess(false);
      }
      setOpenDialog(true);
      form.reset();
    }, 600);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <StyledBox>
      <StyledContainer maxWidth="xs">
        <Grid container spacing={2} className="login-page">
          <Grid item xs={12} align="center">
            <Avatar src={Logo} className="avatar" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="p" align="center" fontWeight={600} gutterBottom>
              Login Now
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
            <StyledTextField
              id="Password"
              size="small"
              label="Password"
              type="password"
              fullWidth
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledButton
              variant="contained"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Signing in..." : "Submit"}
            </StyledButton>
          </Grid>
          <Grid item xs={12} align="center">
            <Link to="/forgot-password" style={styles.forgotPassword}>
              <Typography
                variant="body2"
                align="center"
                padding="8px"
                gutterBottom
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </Typography>
            </Link>
            <Typography variant="body2" align="center" gutterBottom>
              - - - - - - - - -  or - - - - - - - - -
            </Typography>
          </Grid>
 <Grid item xs={12} align="center">
            <StyledButton1 variant="contained" fullWidth onClick={handleSignin}>
              Register
            </StyledButton1>
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
            {dialogSuccess ? <CheckCircle style={{ color: "green" }} /> : <Cancel style={{ color: "red" }} />}
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

export default Login;