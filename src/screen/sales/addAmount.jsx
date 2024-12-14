import React from 'react'
import { useForm } from 'react-hook-form';
import {   StyledBox,
  StyledContainer,
  StyledButton,
  StyledButton1,
  StyledTextField,
  styles, } from '../../Styles/ComponentStyles/LoginStyles'
import { Box, Grid, Icon, Typography, styled, Button, Link } from '@mui/material'
import StareBg from '../../image/addamountbg.jpg'

const AddAmount = () => {
  
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = async (data) => {
    // Handle form submission
  };

  const handleForgotPassword = () => {
    // Handle forgot password
  };

  const handleSignin = () => {
    // Handle signin
  };

  return (
    <StyledBox>
      <StyledContainer maxWidth="xs">
      <Grid container spacing={2} className="login-page">
          <Grid item xs={6}>
            <Typography variant="p" align="center" fontWeight={600} gutterBottom>
              Add Amount
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Customer Name"
              id="CustomerName"
              size="small"
              fullWidth
              {...register("CustomerName", {
                required: {
                  value: true,
                  message: "Missing Field CustomerName",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Invalid Email",
                },
              })}
              error={!!errors.CustomerName}
              helperText={errors.CustomerName?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="p" align="center" fontWeight={600} gutterBottom>
              Add vendor name
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Vendor Name"
              id="VendorName"
              size="small"
              fullWidth
              {...register("VendorName", {
                required: {
                  value: true,
                  message: "Missing Field VendorName",
                },
              })}
              error={!!errors.VendorName}
              helperText={errors.VendorName?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="p" align="center" fontWeight={600} gutterBottom>
              Add customer Name
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Customer Name"
              id="CustomerName1"
              size="small"
              fullWidth
              {...register("CustomerName1", {
                required: {
                  value: true,
                  message: "Missing Field CustomerName",
                },
              })}
              error={!!errors.CustomerName1}
              helperText={errors.CustomerName1?.message}
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
    
      </StyledContainer>
    </StyledBox>
  )
}

export default AddAmount;