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

const AddCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
    const onSubmit = (data) => {
      if (data) {
        setIsSuccess(true);
        setDialogOpen(true);
      } else {
        setIsSuccess(false);
        setDialogOpen(true);
      }
    };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container>
         <Box>
            <Typography variant="h5" gutterBottom sx={styles.title}>
              Add Customer
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
              label="Name"
              id="name"
              size="large"
              fullWidth
              multiline
              {...register("name", { required: "Name is required" })}
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
              label="LastName"
              id="LastName"
              size="large"
              fullWidth
              multiline
              {...register("name", { required: "LastName is required" })}
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
              label="Address"
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
              label="Email Address"
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
            label="Phone Number"
            id="phoneNumber"
            type="tel"
            size="large"
            fullWidth
            multiline
            {...register("phoneNumber", {
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
        messageSuccess="Customer details Add successfully!"
        messageError="Failed to update the customer details."
      />
    </Container>
  );
};

export default AddCustomer;
