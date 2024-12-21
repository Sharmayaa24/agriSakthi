import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import {
  StyledButton,
  StyledTextField,
  styles,
} from "../../Styles/ComponentStyles/formStyles";
import CommonDialog from "../common/Dialogbox";
import "../../Styles/style.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { viewParticularVendorProgress, updateVendorProgress,resetVendorState } from "../../redux/Vendor/vendorAction"; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const UpdateVendor = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); 
  const[mobileMessage,setMobileMessage]=useState("")
  const [errorMessage, setErrorMessage] = useState(""); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getVendorData = useSelector((state) => state.vendor?.particularViewVendor.data);
  const vendorList = getVendorData?.data || [];

  useEffect(() => {
    dispatch(viewParticularVendorProgress(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (vendorList) {
      setValue("first_name", vendorList.first_name);
      setValue("last_name", vendorList.last_name);
      setValue("address", vendorList.address);
      setValue("email", vendorList.email);
      setValue("phone", vendorList.phone);
    }
  }, [vendorList, setValue]);
  
  const UpdateVendor = useSelector((state) => state.vendor?.updateVendor);

  // Destructure properties from UpdateVendor
  const {
    inProgress,
    success,
    error,
    data,
    message,
    errormessage,
    err: {
      additionalErrors: { phone } = {}, 
      contact,
      email,
      message: errorMessage1,
      statusCode,
    } = {},
  } = UpdateVendor || {}; 
  console.log({
    inProgress,
    success,
    error,
    data,
    message,
    errormessage,
    phone,
    contact,
    email,
    errorMessage1,
    statusCode,
  });
  
  console.log(UpdateVendor);
  
  const onSubmit = async (data) => {
    console.log(data);
    dispatch(resetVendorState());
    const formDate = { id: id, data: data };
    console.log(formDate);
    dispatch(updateVendorProgress(formDate));
  };
  useEffect(() => {
    if (UpdateVendor.success) {
      dispatch(resetVendorState());
      setErrorMessage("");
      setSuccessMessage("Vendor added successfully.");
      setIsSuccess(true);
      setDialogOpen(true);
      reset();
      setTimeout(() => {
        setDialogOpen(false);
        setIsSuccess(false);
        setSuccessMessage("")
        navigate("/dashboard");
      }, 3000000);
    } else if (UpdateVendor.error) {
      dispatch(resetVendorState());
      setSuccessMessage("");
      const error = UpdateVendor.errormessage;
      if (error && error.err && error.err.additionalErrors) {
        const additionalErrors = error.err.additionalErrors;
        if (additionalErrors.phone && additionalErrors.phone.includes("phone must be unique")) {
          setMobileMessage("Phone number already exists.");
        } else if (additionalErrors.contact && additionalErrors.contact.includes("contact must be unique")) {
          setMobileMessage("Mobile number already exists.");
        } else if (additionalErrors.email && additionalErrors.email.includes("email must be unique")) {
          setErrorMessage("Email already exists.");
        } else {
          setErrorMessage(UpdateVendor.message || "This email id already added in diffrent mobile number22.");
        }
      } else {
        setErrorMessage(UpdateVendor.message || "This email id already added in diffrent mobile number222.");
      }
  
      setTimeout(() => {
        setErrorMessage("");
        setMobileMessage("");
        setSuccessMessage("")
      }, 3000);
    }
  }, [UpdateVendor]);
  
  const handleDialogClose = () => {
    setDialogOpen(false);
    if (isSuccess) {
      navigate('/dashboard');
    }
  };
  return (
    <Container>
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',paddingLeft:"0px",paddingRight:"100px" }}>
        <Typography variant="h5" gutterBottom sx={styles.title}>
          Update Vendor
        </Typography>
        <IconButton>
          <ArrowBackIcon 
          onClick={() => navigate(-1)}
              back
          />
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
              fullWidth
              multiline
              {...register("address", { required: "Address is required" })}
              error={!!errors.address }
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
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
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
              >
                Submit
              </StyledButton>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* Dialog */}
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

export default UpdateVendor;