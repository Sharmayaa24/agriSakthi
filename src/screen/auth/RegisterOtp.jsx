import React, { useState, useEffect } from 'react'
import { TextField, Button, Box, Typography, Avatar, Grid } from '@mui/material'
import Logo from '../../image/logo.png' // Adjust the path as necessary
import CommonDialog from '../common/Dialogbox' // Adjust the path as necessary
import { useDispatch, useSelector } from 'react-redux'
import { ValidateOtpInProgress } from '../../redux/auth/authAction' // Adjust the path as necessary
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const OTPInputWithTimer = () => {
  const { control, handleSubmit, setValue } = useForm()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [countdown, setCountdown] = useState(60)
  const [isResendDisabled, setIsResendDisabled] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const otpDetails = useSelector(state => state.login?.ValidOtp)

  useEffect(() => {
    let timer
    if (isResendDisabled && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    }
    if (countdown === 0) {
      setIsResendDisabled(false)
    }
    return () => clearInterval(timer)
  }, [isResendDisabled, countdown])

  const handleChange = (e, index) => {
    const value = e.target.value
    if (/^[0-9]*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      setValue(`verification_code[${index}]`, value)
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus()
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus()
    }
  }

  const onSubmit = data => {
    const email = localStorage.getItem('email')
    const otp = data.verification_code.join('')
    const otpData = { email: email, verification_code: otp }
    dispatch(ValidateOtpInProgress(otpData))
    handleResendOtp(otpData)
    if (otpDetails?.message === 'Done Successfully') {
      setSuccessMessage('OTP has been successfully verified!')
      setDialogOpen(true)
      setIsSuccess(true)
      setTimeout(() => {
        setDialogOpen(false)
        setIsSuccess(false)
        navigate('/')
      }, 3000)
    } else if (otpDetails?.message === 'Enter the correct OTP') {
      setErrorMessage('Enter the correct OTP')
      setDialogOpen(true)
      setIsSuccess(false)
    } else {
      setErrorMessage('An error occurred. Please try again.')
      setDialogOpen(true)
      setIsSuccess(false)
    }
  }
  const handleResendOtp = otpData => {
    setIsResendDisabled(true)
    setCountdown(60)
  }
  const handleDialogClose = () => {
    setDialogOpen(false)
  }
  const handleBackToLogin = () => {
    navigate('/')
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Box
        elevation={3}
        sx={{ padding: 2, textAlign: 'center', width: 500, height: 400 }}
      >
        <Grid item xs={12} align='center'>
          <Avatar src={Logo} className='avatar' />
        </Grid>
        <Typography variant='h6'>Enter OTP</Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}
        >
          {otp.map((digit, index) => (
            <TextField
              key={index}
              id={`otp-input-${index}`}
              value={digit}
              onChange={e => handleChange(e, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              inputProps={{ maxLength: 1 }}
              sx={{
                width: '50px',
                height: '50px',
                textAlign: 'center',
                margin: '0 5px'
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            width: '100%',
            padding: '10px',
            justifyContent: 'center'
          }}
        >
          <Button variant='contained' onClick={handleSubmit(onSubmit)}>
            Submit OTP
          </Button>
          <Button
            variant='outlined'
            onClick={handleResendOtp(onSubmit)}
            disabled={isResendDisabled}
            sx={{ color: isResendDisabled ? 'red' : 'inherit' }}
          >
            {isResendDisabled ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
          </Button>
        </Box>
        <Box>
          <Button
            variant='text'
            onClick={handleBackToLogin}
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            Back to Login
          </Button>
        </Box>
        <CommonDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          isSuccess={isSuccess}
          message={isSuccess ? successMessage : errorMessage}
        />
      </Box>
    </Box>
  )
}

export default OTPInputWithTimer
