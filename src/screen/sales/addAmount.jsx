import React, { useState } from 'react';
import { StyledContainer, StyledTextField, StyledButton } from "../../Styles/ComponentStyles/formStyles";
import { Box, Grid, Typography } from "@mui/material";
import card1 from "../../image/card1.png";
import card2 from "../../image/card2.png";
import { useForm } from 'react-hook-form';
import { QRCodeCanvas } from 'qrcode.react';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "30px",
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    emptyBox: {
        height: 500,
        width: 400,
        borderRadius: "10px",
        padding: "10px 20px",
        backgroundColor: 'white',
        border: '5px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    qrCodeContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
};

const AddAmount = () => {
    const { register, handleSubmit, formState } = useForm();
    const [qrCodeVisible, setQrCodeVisible] = useState(false);
    const [amount, setAmount] = useState('');

    const handleGenerateQRCode = (data) => {
        setQrCodeVisible(true);
        setAmount(data.AddAmount);
    };

    const { errors } = formState;

    const onSubmit = async (data) => {
        console.log("Form Data Submitted:", data);
    };

    const handleShare = () => {
        const canvas = document.getElementById('qr-code');
        const newCanvas = document.createElement('canvas');
        const ctx = newCanvas.getContext('2d');

        // Set the new canvas size
        newCanvas.width = 400;
        newCanvas.height = 500;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
        const qrCodeImage = canvas.toDataURL();
        const img = new Image();
        img.src = qrCodeImage;
        img.onload = () => {
            ctx.drawImage(img, (newCanvas.width - 300) / 2, (newCanvas.height - 300) / 2, 300, 300);
            newCanvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'qrcode.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        };
    };

    return (
        <StyledContainer padding={3}>
            <Grid container spacing={2} marginBottom={3}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <img src={card1} alt="image" width="321px" height="202px" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <img src={card2} alt="image" />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Grid container spacing={2} className="login-page" paddingLeft={15}>
                        <Grid item xs={6}>
                            <Typography variant="p" align="center" fontWeight={600} gutterBottom>
                                Add Amount
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <StyledTextField
                                label="Add Amount"
                                id="AddAmount"
                                size="small"
                                fullWidth
                                {...register("AddAmount", {
                                    required: {
                                        value: true,
                                        message: "Missing Field AddAmount",
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Invalid AddAmount",
                                    },
                                })}
                                error={!!errors.AddAmount}
                                helperText={errors.AddAmount?.message}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="p" align="center" fontWeight={600} gutterBottom>
                                Add vendor number
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                           <StyledTextField
                            label="Vendor Number"
                            id="VendorNumber"
                            size="small"
                            fullWidth
                            value={"9908789678"}
                            {...register("VendorName", {
                                required: {
                                    value: true,
                                    message: "Missing Field VendorName",
                                },
                            })}
                            error={!!errors.VendorNumber}
                            helperText={errors.VendorNumber?.message}
                            InputProps={{ readOnly: true }}
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="p" align="center" fontWeight={600} gutterBottom>
                                Add customer Name
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <StyledTextField
                                label="Customer Name"
                                id="CustomerName1"
                                size="small"
                                fullWidth
                                value={"madhu"}
                                {...register("CustomerName1", {
                                    required: {
                                        value: true,
                                        message: "Missing Field CustomerName",
                                    },
                                })}
                                error={!!errors.CustomerName1}
                                helperText={errors.CustomerName1?.message}
                                InputProps={{ readOnly: true }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <StyledButton
                                variant="contained"
                                fullWidth
                                onClick={handleSubmit(handleGenerateQRCode)}
                                disabled={formState.isSubmitting}
                                sx={{
                                    padding: "10px 10px",
                                }}
                            >
                                {formState.isSubmitting ? "Signing in..." : "Generate QR Code"}
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div style={styles.container}>
                        <div style={styles.emptyBox}>
                            <div style={styles.qrCodeContainer}>
                                {qrCodeVisible && (
                                    <QRCodeCanvas id="qr-code" value={amount} size={300} />
                                )}
                            </div>
                        </div>
                        {qrCodeVisible && (
                            <button onClick={handleShare} style={styles.button}>
                                Share QR Code
                            </button>
                        )}
                    </div>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default AddAmount;