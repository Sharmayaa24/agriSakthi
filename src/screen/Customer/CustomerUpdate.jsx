import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import {
  StyledButton,
  StyledTextField,
  styles,
} from "../../Styles/ComponentStyles/formStyles";
import CommonDialog from "../common/Dialogbox";
import "../../Styles/style.css"
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomerProgress, viewCustomerProgress } from '../../redux/Customer/customerAction';


 

const UpdateCustomer = () => {
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
  const getCustomerData = useSelector((state) => state.customer?.ViewCustomer.data);
  const customerList = getCustomerData?.data || [];
    React.useEffect(() => {
      dispatch(viewCustomerProgress(id));
    }, [dispatch, id]);
    console.log(id,"id")
 
    React.useEffect(() => {
    if (customerList) {
      setValue("first_name", customerList.first_name);
      setValue("last_name", customerList.last_name);
      setValue("address", customerList.address);
      setValue("email", customerList.email);
      setValue("phone", customerList.phone);
    }
  }, [customerList, setValue]);

const UpdateCustomer=useSelector((state)=>state.customer?.updateCustomer);
console.log(UpdateCustomer,"alls")
const onSubmit = (data) => {
  console.log(data);
      const formData = { id: id, data: data };
      console.log(formData);
      dispatch(updateCustomerProgress(formData));
  if (UpdateCustomer?.success) {
    console.log(UpdateCustomer.success)
      setSuccessMessage("Customer updated successfully.");
      setIsSuccess(true);
      setDialogOpen(true);
      const timer = setTimeout(() => {
        setDialogOpen(false);
        setIsSuccess(false);
        navigate('/dashboard');
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (UpdateCustomer?.error) {
      setSuccessMessage("");
      const error = UpdateCustomer.errormessage; 
      if (error?.additionalErrors) { 
        const additionalErrors = error.additionalErrors; 
        if (additionalErrors.phone?.includes("phone must be unique")) {
          setMobileMessage("Phone number already exists.");
        } else if (additionalErrors.contact?.includes("contact must be unique")) {
          setMobileMessage("Mobile number already exists.");
        } else if (additionalErrors.email?.includes("email must be unique")) {
          setErrorMessage("Email already exists.");
        } else {
          setErrorMessage(additionalErrors.message||"This email ID is already associated with a different mobile number.");
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
         <Box>
            <Typography variant="h5" gutterBottom sx={styles.title}>
              Update Customer
            </Typography>
          </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={ styles.textFieldContainer }
            >
              First Name 
            </Typography>
            <StyledTextField
              id="first_name"
              size="large"
              fullWidth
              multiline
              {...register("first_name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={ styles.textFieldContainer }
            >
              Last Name 
            </Typography>
            <StyledTextField
              id="last_name"
              size="large"
              fullWidth
              multiline
              {...register("last_name", { required: "LastName is required" })}
              error={!!errors.LastName}
              helperText={errors.LastName ? errors.name.message : ""}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              fontSize={16}
              sx={ styles.textFieldContainer }
            >
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
            <Typography
              variant="h6"
              fontSize={16}
              sx={ styles.textFieldContainer }
            >
              Email Address
            </Typography>
            <StyledTextField
              id="email"
              size="large"
              fullWidth
              multiline
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
            <Typography
            variant="h6"
            fontSize={16}
            sx={styles.textFieldContainer}
            >
            Phone Number
            </Typography>
            <StyledTextField
            id="phone"
            type="tel"
            size="large"
            fullWidth
            multiline
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
            helperText={errors.phone ? errors.phone.message : ""}
            />
             {mobileMessage && (
                <Typography color="error" style={{ marginTop: "1rem" }}>
                  {mobileMessage}
                </Typography>
              )}
            </Box>
          <Box sx={ styles.submitGap }>
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

export default UpdateCustomer;
