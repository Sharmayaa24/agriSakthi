import React from "react";
import { Typography, Grid, Avatar,MenuItem } from "@mui/material";
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

const Register = () => {
  const navigate = useNavigate();


  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    // handleRegister(data);
    console.log("form data", data);
    navigate("/dashboard");
    form.reset();
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
              id="username"
              size="small"
              fullWidth
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Missing Field firstName",
                },
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Last Name"
              id="lastName"
              size="small"
              fullWidth
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Missing Field lastName",
                },
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
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
              id="password"
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
            <StyledTextField
              id="confirmPassword"
              size="small"
              label="Confirm Password"
              type="password"
              fullWidth
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Please confirm your password",
                },
                validate: (value) => {
                  const { password } = form.getValues();
                  return value === password || "Passwords do not match";
                },
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </Grid>
         <Grid item xs={12}>
            <StyledTextField
                label="Mobile"
                id="mobile"
                size="small"
                fullWidth
                {...register("mobile", {
                required: {
                    value: true,
                    message: "Missing Field mobile",
                },
                pattern: {
                    value: /^(6|7|8|9)\d{9}$/,
                    message: "Invalid Mobile Number",
                },
                })}
                error={!!errors.mobile}
                helperText={errors.mobile?.message}
            />
        </Grid>
       <Grid item xs={12}>
            <StyledTextField
                label="Address"
                id="addressLine"
                size="small"
                multiline
                rows={4}
                fullWidth
                {...register("addressLine", {
                required: {
                    value: true,
                    message: "Missing Field addressLine",
                },
                })}
                error={!!errors.addressLine1}
                helperText={errors.addressLine1?.message}
            />
        </Grid>
   <Grid item xs={12}>
  <StyledTextField
    label="User Type"
    id="userType"
    multiline

    select
    fullWidth
    {...register("userType", {
      required: {
        value: true,
        message: "Missing Field userType",
      },
    })}
    error={!!errors.userType}
    helperText={errors.userType?.message}
  >
    <MenuItem value="customer">Customer</MenuItem>
    <MenuItem value="vendor">Vendor</MenuItem>
  </StyledTextField>
</Grid>

          <Grid item xs={12}>
            <StyledButton
              variant="contained"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Registering..." : "Register"}
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
      </StyledContainer>
    </StyledBox>
  );
};

export default Register;