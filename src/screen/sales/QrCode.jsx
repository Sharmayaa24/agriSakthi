import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [customerName, setCustomerName] = useState('John Doe');
  const [vendorName, setVendorName] = useState('Vendor Inc.');
  const [date, setDate] = useState('2023-10-01');
  const [transactionId, setTransactionId] = useState('TX123456');
  const [bankName, setBankName] = useState('Bank of America');
  const [amount, setAmount] = useState('5000');

//   const fieldData = () => [
//     {
//       id: "#1123",
//       "Customer name": customerName,
//       "Vendor Name": vendorName,
//       "Date": date,
//       "Transaction id": transactionId,
//       "Bank Name": bankName,
//       "Address": "123 Main St, Anytown, USA",
//       "Amount":"5000",
//     },
//   ];
  const fieldData = () => [
    {
      id: "#1123",
      "Amount": "5000",
    },
  ];
  const qrData = JSON.stringify(fieldData()[0]);

  const handleShare = () => {
    const canvas = document.getElementById('qr-code');
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'qrcode.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  return (
    <div style={styles.container}>
      <QRCodeCanvas id="qr-code" value={qrData} size={300} />
      <button onClick={handleShare} style={styles.button}>
        Share QR Code
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default QRCodeGenerator;