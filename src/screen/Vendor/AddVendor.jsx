import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  Grid,
  Container,
  IconButton
} from "@mui/material";
import {
  StyledButton,
  StyledTextField,
  styles,
} from "../../Styles/ComponentStyles/formStyles";
import CommonDialog from "../common/Dialogbox";
import "../../Styles/style.css";
import { useDispatch, useSelector } from 'react-redux';
import { addVendorProgress, resetVendorState } from "../../redux/Vendor/vendorAction"; 
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddVendor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false); 
  const[mobileMessage,setMobileMessage]=useState("")
  const [errorMessage, setErrorMessage] = useState(""); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const vendorData = useSelector((state) => state.vendor.addVendor);
  const { inProgress, errormessage } = vendorData; 

  const message = vendorData.message && typeof vendorData.message === 'string' 
    ? vendorData.message 
    : (vendorData.message && vendorData.message.message) || ''; 

  const onSubmit = async (data) => {
    dispatch(resetVendorState());
    dispatch(addVendorProgress(data)); 
  };

  // useEffect(() => {
    if (vendorData.success) {
      dispatch(resetVendorState());
      setErrorMessage("");
      setSuccessMessage(message || "Vendor added successfully.");
      setIsSuccess(true);
      setDialogOpen(true);
      reset();
      setTimeout(() => {
        setDialogOpen(false);
        setIsSuccess(false);
        navigate("/dashboard");
      }, 3000);
    } else if (vendorData.error) {
      dispatch(resetVendorState());
      setSuccessMessage("");
      if (errormessage) {
        if (errormessage.includes("email must be unique")) {
          setErrorMessage("Email already present.");
        } else if (errormessage.includes("contact must be unique")) {
          setMobileMessage("Mobile number already present.");
        } else {
          setErrorMessage(errormessage || "An error occurred while adding the vendor.");
        }
        setTimeout(() => {
          setErrorMessage("");
          setMobileMessage("");
        }, 3000);
      }
    }
  // }, []);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container>
      <React.Fragment>
        <Box sx={{ ...styles.title_box }}>
          <Typography variant="h5" gutterBottom sx={styles.title}>
            Add Vendor
          </Typography>
          <IconButton>
            <ArrowBackIcon onClick={() => navigate(-1)} back />
          </IconButton>
        </Box>
      </React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Box>
            <Typography variant="h6" fontSize={16} sx={styles.textFieldContainer}>
              First Name 
            </Typography>
            <StyledTextField
              id="first_name"
              size="large"
              InputProps={{
                autoComplete: "off",
              }}
              fullWidth
              {...register("first_name", { required: "First Name is required" })}
              error={!!errors.first_name}
              helperText={errors.first_name ? errors.first_name.message : ""}
            />
          </Box>
          <Box>
            <Typography variant="h6" fontSize={16} sx={styles.textFieldContainer}>
              Last Name 
            </Typography>
            <StyledTextField
              id="last_name"
              size="large"
              InputProps={{
                autoComplete: "off",
              }}
              fullWidth
              {...register("last_name", { required: "Last Name is required" })}
              error={!!errors.last_name}
              helperText={errors.last_name ? errors.last_name.message : ""}
            />
          </Box>
          <Box>
            <Typography variant="h6" fontSize={16} sx={styles.textFieldContainer}>
              Address 
            </Typography>
            <StyledTextField
              id="address"
              rows={4}
              size="large"
              InputProps={{
                autoComplete: "new-password",
              }}
              fullWidth
              multiline
              {...register("address", { required: "Address is required" })}
              error={!!errors.address}
              helperText={errors.address ? errors.address.message : ""}
            />
          </Box>
          <Box>
            <Typography variant="h6" fontSize={16} sx={styles.textFieldContainer}>
              Email Address
            </Typography>
            <StyledTextField 
              id="email"
              size="large"
              InputProps={{
                autoComplete: "off",
              }}
              fullWidth
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
            {errorMessage && (
              <Typography color="error" style={{ marginTop: "1rem" }}>
                {errorMessage}
              </Typography>
            )}
          </Box>
          <Box>
            <Typography variant="h6" fontSize={16} sx={styles.textFieldContainer}>
              Phone Number
            </Typography>
            <StyledTextField
              id="phone"
              type="tel"
              size="large"
              InputProps={{
                autoComplete: "off",
              }}
              fullWidth
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[6789]\d{9}$/,
                  message: "Invalid phone number, should start with 6, 7, 8 or 9 and be 10 digits long",
                },
                minLength: {
                  value: 10,
                  message: "Phone number should be 10 digits long",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number should be 10 digits long",
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : ""}
            />
            {mobileMessage && (
              <Typography color="error" style={{ marginTop: "1rem" }}>
                {mobileMessage}
              </Typography>
            )}
          </Box>
          <Box sx={styles.submitGap}>
            <Grid item xs={3}>
              <StyledButton
                sx={styles.submitButtonContainer}
                onClick={handleSubmit(onSubmit)}
                disabled={inProgress}
              >
                Submit
              </StyledButton>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <CommonDialog
        open={dialogOpen}
        isSuccess={isSuccess}
        onClose={handleDialogClose}
        messageSuccess={successMessage} 
        messageError={errorMessage}  
      />
    </Container>
  );
};

export default AddVendor;