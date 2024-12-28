import React, { useState } from "react";
import { Typography, Grid, Avatar, Box, Dialog, DialogContent, DialogTitle, InputAdornment, IconButton } from "@mui/material";
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
import { CheckCircle, Cancel, VisibilityOff, Visibility } from "@mui/icons-material"; 
import "../../Styles/login.css";
import { useDispatch, useSelector } from "react-redux";
import { FORGOT_PASSWORD_IN_PROGRESS } from "../../redux/auth/authTypes";
import { ForgetPasswordInProgress } from "../../redux/auth/authAction";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState(false);
  const [dialogSuccess, setDialogSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { errors } = formState;
  const passwordResponse = useSelector((state) => state.login?.ForgetPassword);
  console.log(passwordResponse)



  const onSubmit = (data) => {
    const email = localStorage.getItem("email");
    const formData = { email:email, password: data.newPassword };
    console.log(data,formData);
    dispatch(ForgetPasswordInProgress(formData));
    if (passwordResponse?.message) {
      console.log(passwordResponse?.message,passwordResponse?.error);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setDialogMessage("Password has been successfully changed!");
        setDialogSuccess(true);
        setOpenDialog(true);
        reset();
      }, 3000);
    } else if (passwordResponse?.error) {
      console.log(passwordResponse?.message,passwordResponse?.error);
      setDialogSuccess(false);
      setDialogMessage("Password Change Failed");
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    if (dialogSuccess) {
      navigate("/");
    }
  };

  return (
    <StyledBox>
      <StyledContainer maxWidth="xs">
        <Grid container spacing={2} className="change-password-page">
          <Grid item xs={12} align="center">
            <Avatar src={Logo} className="avatar" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
              Change Password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="New Password"
              id="newPassword"
              type={showPassword ? "text" : "password"}
              size="small"
              fullWidth
              {...register("newPassword", {
                required: {
                  value: true,
                  message: "Missing Field New Password",
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Confirm Password"
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              size="small"
              fullWidth
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Missing Field Confirm Password",
                },
                validate: (value) => {
                  const { newPassword } = getValues();
                  return newPassword === value || "Passwords do not match";
                },
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledButton
              variant="contained"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Changing..." : "Change Password"}
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
export default ChangePassword;