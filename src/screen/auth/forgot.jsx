import React, { useEffect, useState } from "react";
import { Typography, Grid, Avatar, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  StyledBox,
  StyledContainer,
  StyledButton,
  StyledTextField,
} from "../../Styles/ComponentStyles/LoginStyles";
import { ScaleLoader } from "react-spinners";
import Logo from "../../image/logo.png";
import CommonDialog from "../common/Dialogbox";
import { useDispatch, useSelector } from "react-redux";
import { RequestOtpInProgress,ResetState } from "../../redux/auth/authAction"; 

const ForgotPassword = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(); 
  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const otpMessage = useSelector((state) => state.login.requestOtp);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
   useEffect(() => {
     dispatch(ResetState());
     setDialogOpen(false);
     setIsSuccess(false);
   }, [dispatch]);
  const onSubmit = (data) => {
    const formData = { email: data.email, subject_type: "1" };
    localStorage.setItem("email", data.email);
    console.log(formData);
    setLoading(true);
    dispatch(RequestOtpInProgress(formData));
  };

  useEffect(() => {
    if (otpMessage.success) {
      dispatch(ResetState());
      console.log(otpMessage.success);
      setLoading(false); 
      setErrorMessage("");
      setSuccessMessage( otpMessage?.message ||"OTP has been successfully sent to your email!");
      setIsSuccess(true);
      setDialogOpen(true);
      reset();
      setTimeout(() => {
        setDialogOpen(false);
        setIsSuccess(false);
        navigate("/otp");
      }, 3000);
    } else if (otpMessage.error) {
      setLoading(false);
      setSuccessMessage("/otp");
      const errormessage = otpMessage.message; 
      if (errormessage) {
        console.log(errormessage);
        if (errormessage.includes("Request failed with status code 400")) {
          setErrorMessage("invalid email.");
        }else {
          setErrorMessage(errormessage || "An error occurred.");
        }
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    }
  }, [otpMessage, navigate, reset]);

  const handleCloseDialog = () => {
    setDialogOpen(false);
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
                  value: /^\S+@\S+$/i,
                  message: "Invalid Email",
                },
              })}
 error={!!errors.email}
              helperText={errors.email?.message}
            />
             {errorMessage && (
                           <Typography color="error" style={{ marginTop: "1rem" }}>
                             {errorMessage}
                           </Typography>
                         )}
          </Grid>
          <Grid item xs={12}>
            <StyledButton
              variant="contained"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </StyledButton>
          </Grid>
          <Grid item xs={12} align="center">
            <Link to="/" style={{ textDecoration: 'none' }}>
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
        <CommonDialog
          open={dialogOpen}
          isSuccess={isSuccess}
          onClose={handleCloseDialog}
          messageSuccess={successMessage} 
          messageError={errorMessage}  
        />
      </StyledContainer>
    </StyledBox>
  );
};

export default ForgotPassword;