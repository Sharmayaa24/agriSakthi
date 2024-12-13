import React, { useState } from "react";
import { Typography, Grid, Avatar, Box, Button } from "@mui/material";
import OtpInput from "react-otp-input"; 
import Logo from "../../image/logo.png";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerifyOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Verifying OTP:", otp);
    }, 2000);
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} align="center">
          <Avatar src={Logo} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" fontWeight={600}>
            Enter the OTP sent to your phone
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            separator={<span>-</span>}
            inputStyle={{
              width: "40px",
              height: "40px",
              margin: "0 5px",
              textAlign: "center",
              fontSize: "20px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleVerifyOtp}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OtpPage;