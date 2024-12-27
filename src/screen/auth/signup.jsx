import React, { useState, useEffect } from "react";
import { Typography, Grid, Avatar, MenuItem, InputAdornment, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  StyledBox,
  StyledContainer,
  StyledButton,
  StyledTextField,
  styles,
} from "../../Styles/ComponentStyles/LoginStyles";

import Logo from "../../image/logo.png";
import "../../Styles/login.css";
import { useDispatch, useSelector } from 'react-redux';
import { signUpInProgress, ResetState } from '../../redux/auth/authAction';
import CommonDialog from "../common/Dialogbox";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Register = () => {
   const [dialogOpen, setDialogOpen] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);
   const [successMessage, setSuccessMessage] = useState(false);
   const [showPassword, setShowPassword] = useState(false); 
   const [mobileMessage, setMobileMessage] = useState("");
    const signupDetails = useSelector((state) => state.login.NewUser);
    const {errormessage, inProgress} = signupDetails;
   const [errorMessage, setErrorMessage] = useState(""); 
   const dispatch = useDispatch();
   
   useEffect(() => {
     dispatch(ResetState());
     setDialogOpen(false);
     setIsSuccess(false);
   }, [dispatch]);
  
   const navigate = useNavigate();
   
   const { register, handleSubmit, formState, reset } = useForm();
   const { errors } = formState;

   const onSubmit = (data) => {
     console.log("form data", data);
     dispatch(ResetState());
     dispatch(signUpInProgress(data));
   };
useEffect(() => {
   console.log("signupDetails", signupDetails);

     if (signupDetails.success) {
       dispatch(ResetState());
       console.log("signupDetails", signupDetails.success);
       setErrorMessage("");
       setSuccessMessage(signupDetails.message?.data?.message || "Register added successfully.");
       setIsSuccess(true);
       setDialogOpen(true);
       reset();
       setTimeout(() => {
         setDialogOpen(false);
         setIsSuccess(false);
         navigate("/");
       }, 3000);
     } else if (signupDetails.error) {
       if (errormessage) {
         if (errormessage.email && errormessage.email.includes("email must be unique")) {
           setErrorMessage("Email already present.");
         } else if (errormessage.contact && errormessage.contact.includes("contact must be unique")) {
           setMobileMessage("Mobile number already present.");
         } else {
           setErrorMessage(errormessage.message || "An error occurred while adding the vendor.");
         }
         setTimeout(() => {
           setErrorMessage("");
           setMobileMessage("");
         }, 3000);
       }
     }
    }, [signupDetails, dispatch, errormessage, navigate, reset]);

   const handleDialogClose = () => {
     setDialogOpen(false);
   };

   return (
     <StyledBox>
       <StyledContainer maxWidth="xs">
         <Grid container spacing={2} className="register-page">
           <Grid item xs={12} align="center">
             <Avatar src={Logo} className="avatar" />
           </Grid>
           <Grid item xs={12}>
             <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
               Register Now
             </Typography>
           </Grid>
           <Grid item xs={12}>
             <StyledTextField
               label="First Name"
               id="first_name"
               size="small"
               fullWidth
               {...register("first_name", {
                 required: {
                   value: true,
                   message: "Missing Field firstName",
                 },
               })}
               error={ !!errors.first_name}
               helperText={errors.first_name?.message}
             />
           </Grid>
           <Grid item xs={12}>
             <StyledTextField
               label="Last Name"
               id="last_name"
               size="small"
               fullWidth
               {...register("last_name", {
                 required: {
                   value: true,
                   message: "Missing Field lastName",
                 },
               })}
               error={!!errors.last_name}
               helperText={errors.last_name?.message}
             />
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
             <StyledTextField
               id="password"
               size="small"
               label="Password"
               type={showPassword ? "text" : "password"}
               fullWidth
               {...register("password", {
                 required: {
                   value: true,
                   message: "Password is Required",
                 },
               })}
               error={!!errors.password}
               helperText={errors.password?.message}
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
               label="Mobile"
               id="contact"
               size="small"
               fullWidth
               {...register("contact", {
                 required: {
                   value: true,
                   message: "Missing Field mobile",
                 },
                 pattern: {
                   value: /^(6|7|8|9)\d{9}$/,
                   message: "Invalid Mobile Number",
                 },
               })}
               error={!!errors.contact}
               helperText={errors.contact?.message}
             />
             {mobileMessage && (
               <Typography color="error" style={{ marginTop: "1rem" }}>
                 {mobileMessage}
               </Typography>
             )}
           </Grid>
           <Grid item xs={12}>
             <StyledTextField
               label="Address"
               id="address"
               size="small"
               multiline
               rows={4}
               fullWidth
               {...register("address", {
                 required: {
                   value: true,
                   message: "Missing Field addressLine",
                 },
               })}
               error={!!errors.address}
               helperText={errors.address?.message}
             />
           </Grid>
           <Grid item xs={12}>
             <StyledTextField
               label="User  Type"
               id="user_type"
               rows={3}
               select
               fullWidth
               {...register("user_type", {
                 required: {
                   value: true,
                   message: "Missing Field userType",
                 },
               })}
               error={!!errors.user_type}
               helperText={errors.user_type?.message}
             >
               <MenuItem value="">Select User Type</MenuItem>
               <MenuItem value="3">Customer</MenuItem>
               <MenuItem value="2">Vendor</MenuItem>
               <MenuItem value="1">Admin</MenuItem>
             </StyledTextField>
           </Grid>
           <Grid item xs={12}>
             <StyledButton
               variant="contained"
               fullWidth
               onClick={handleSubmit(onSubmit)}
               disabled={inProgress}
             >
               Register
             </StyledButton>
           </Grid>
           <Grid item xs={12} align="center">
             <Typography variant="body2" align="center" padding="8px" gutterBottom>
               Already have an account? 
               <Link to="/" style={styles.link}>
                 Login
               </Link>
             </Typography>
           </Grid>
         </Grid>
         <CommonDialog
           open={dialogOpen}
           isSuccess={isSuccess}
           onClose={handleDialogClose}
           messageSuccess={successMessage} 
           messageError={errorMessage}  
         />
       </StyledContainer>
     </StyledBox>
   );
};

export default Register;