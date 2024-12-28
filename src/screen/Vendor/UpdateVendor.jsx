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
import { viewParticularVendorProgress, updateVendorProgress, resetVendorState } from "../../redux/Vendor/vendorAction"; 
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
  const [mobileMessage, setMobileMessage] = useState("");
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
      setValue("shop_name", vendorList.shop_name);
      setValue("address", vendorList.address);
      setValue("email", vendorList.email);
      setValue("phone", vendorList.phone);
    }
  }, [vendorList, setValue]);
  
  const UpdateVendor = useSelector((state) => state.vendor?.updateVendor);
  const onSubmit = async (data) => {
    console.log(data);
    dispatch(resetVendorState());
    const formData = { id: id, data: data };
    console.log(formData);
    dispatch(updateVendorProgress(formData));
    if (UpdateVendor?.success) {
      setSuccessMessage("Vendor updated successfully.");
      setIsSuccess(true);
      setDialogOpen(true);
      const timer = setTimeout(() => {
        setDialogOpen(false);
        setIsSuccess(false);
        navigate('/dashboard');
        setSuccessMessage("");
        dispatch(resetVendorState());
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (UpdateVendor?.error) {
      dispatch(resetVendorState());
      setSuccessMessage("");
      const error = UpdateVendor.errormessage;
      if (error?.err?.additionalErrors) {
        const additionalErrors = error.err.additionalErrors;
        if (additionalErrors.phone?.includes("phone must be unique")) {
          setMobileMessage("Phone number already exists.");
        } else if (additionalErrors.contact?.includes("contact must be unique")) {
          setMobileMessage("Mobile number already exists.");
        } else if (additionalErrors.email?.includes("email must be unique")) {
          setErrorMessage("Email already exists.");
        } else {
          setErrorMessage( "This email ID is already associated with a different mobile number.");
        }
      } else {
        setErrorMessage("This email ID is already associated with a different mobile number.");
      }

      const timer = setTimeout(() => {
        setErrorMessage("");
        setMobileMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container>
      <React.Fragment>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: "0px", paddingRight: "100px" }}>
          <Typography variant="h5" gutterBottom sx={styles.title}>
            Update Vendor
          </Typography>
          <IconButton>
            <ArrowBackIcon 
              onClick={() => navigate(- 1)}
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
              Shop Name 
            </Typography>
            <StyledTextField
              id="shop_name"
              size="large"
              InputProps={{
                autoComplete: "off",
              }}
              fullWidth
              {...register("shop_name", { required: "shop Name is required" })}
              error={!!errors.shop_name}
              helperText={errors.shop_name ? errors.shop_name.message : ""}
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