
import React from 'react'
import { StyledContainer, StyledTextField,StyledDataGrid } from "../../Styles/ComponentStyles/style"
import "../../Styles/style.css"
import { Box, Grid, Icon, Typography, styled, Button } from '@mui/material'
import addWallet from '../../image/add-wallet.png'
import StareBg from '../../image/starbg.png'
import ShareIcon from '@mui/icons-material/Share';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import { useForm, Controller } from 'react-hook-form';
import {viewWalletProgress}from "../../redux/wallet/walletAction"



const PaymentBox = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${StareBg})`,
    backgroundSize: 'cover',
    backgroundColor: "#1d7f41",
    color: "#fff",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    padding: "20px 20px",
    backgroundBlendMode: "overlay",
}))

const AddWallet = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { id } = useParams();
      const dispatch = useDispatch();
      const navigate = useNavigate();
    console.log(id);
  const getWalletData = useSelector((state) => state.wallet?.ViewWallet.data);
  const walletList = getWalletData?.data || [];
  console.log(walletList.available_amount,walletList.bonus_amount,walletList.total_amount,"list")
    
      React.useEffect(() => {
        dispatch(viewWalletProgress(id));
      }, [dispatch, id]);

    const onSubmit = (data) => {
        console.log('Submitted data:', data);
    };

    return (
        <StyledContainer padding={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={7}>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: "bold", textAlign: "start", paddingLeft: "20px", paddingTop: "20px" }}>
                        Customer Id:id
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        paddingTop: "50px",
                        marginBottom: "10px"
                    }}>
                        <Box>
                            <img src={addWallet} alt="Wallet Details" style={{ width: "100px", height: "100px", marginRight: "10px" }} />
                        </Box>
                        <Box>
                            <Typography variant="h5" color="Black" sx={{ fontWeight: "bold", marginRight: "20px" }}>
                                Wallet Details
                            </Typography>
                            <Typography variant="h5" color="green" sx={{ fontWeight: "bold", marginRight: "10px" }}>
                                ₹{walletList.available_amount}(Rupees)
                            </Typography>
                            <Typography variant="P" component="p" color="black" sx={{ fontWeight: "bold", textAlign: "start", marginRight: "10px" }}>
                                Wallet Amount
                            </Typography>
                        </Box>
                    </Box>
                    <Box border={1}>
                        <Box padding={5}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Typography variant="h5" color="green" sx={{ fontWeight: "bold", textAlign: "start" }}>
                                    Enter Your Amount
                                </Typography>
                                <Box sx={{
                                    display: "flex",
                                    width: "100%",
                                    alignItems: "center"
                                }}>
                                    <Controller
                                        name="amount"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: 'Amount is required',
                                            min: {
                                                value: 1,
                                                message: 'Amount must be greater than zero',
                                            },
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <StyledTextField
                                                {...field}
                                                id="standard-multiline-flexible"
                                                label="Amount"
                                                type='number'
                                                multiline
                                                maxRows={4}
                                                variant="standard"
                                                sx={{
                                                    width: '80%',
                                                }}
                                                error={!!error}
                                                helperText={error ? error.message : 'Please enter a valid amount'}
                                            />
                                        )}
                                    />
                                    <Box sx={{ marginLeft: "10px" }}>
                                        <Typography>
                                            ₹(Rupees)
                                        </Typography>
                                    </Box>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                    <Box marginTop={2} textAlign={"end"}>
                        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit(onSubmit)}>
                            Submit
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={0} sm={0} md={0} lg={1} xl={1}></Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Box sx={{
                        paddingTop: "15%",
                        marginBottom:"20px"
                    }}>
                        <PaymentBox>
                            <Box sx={{
                                display: "flex",
                                gap: "100px",
                                padding: "20px"
                            }}>
                                <Box>
                                    <Box sx={{
                                        marginBottom: "10px"
                                    }}>
                                        <Icon>
                                            <ShareIcon />
                                        </Icon>
                                    </Box>
                                    <Typography variant="h6" color="white" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                                    {walletList.available_amount}
                                    </Typography>
                                    <Typography variant="small" component="p" color="#ccc" sx={{ fontWeight: "bold", textAlign: "start" }}>
                                        available Amount
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box sx={{
                                        marginBottom: "10px"
                                    }}>
                                        <Icon>
                                            <StarHalfOutlinedIcon />
                                        </Icon>
                                    </Box>
                                    <Typography variant="h6" color="white" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                                 
                                       {walletList.bonus_amount}
                                    </Typography>
                                    <Typography variant="P" component="p" color="#ccc" sx={{ fontWeight: "bold", textAlign: "start" }}>
                                        Bonus Amount
                                    </Typography>
                                </Box>
                            </Box>
                        </PaymentBox>
                    </Box>
                    <Box>
                        <StyledContainer>
                            <Typography variant="h6" color="BLACK" sx={{ fontWeight: "bold", marginBottom:"10px", textAlign: "start",padding: "10px" }}>
                                Recent Payment Method
                            </Typography>
                           <StyledDataGrid
                                rows={[
                                    { id: 1, date: '2022-01-01', amount: 1000 },
                                    { id: 2, date: '2022-01-15', amount: 2000 },
                                    { id: 3, date: '2022-02-01', amount: 3000 },
                                ]}
                                columns={[
                                    { field: 'date', headerName: 'Date', width: 175, headerClassName: 'header' },
                                    { field: 'amount', headerName: 'Amount', width: 175, headerClassName: 'header' },
                                ]}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                getRowClassName={(params) =>
                                    params.indexRelativeToCurrentView % 2 === 0 ? 'even-row' : 'odd-row'
                                }
                                sx={{
                                    '& .header': {
                                        backgroundColor: '#333',
                                        color: '#fff',
                                    },
                                    '& .even-row': {
                                        backgroundColor: '#ccc',
                                    },
                                    '& .odd-row': {
                                        backgroundColor: '#fff',
                                    },
                                }}
                            />
                        </StyledContainer>
                    </Box>














                </Grid>
            </Grid>
        </StyledContainer>
    )
}

export default AddWallet
