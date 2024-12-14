import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CloudSyncOutlinedIcon from "@mui/icons-material/CloudSyncOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

export const APP_LINK = {
  DASHBOARD: "/dashboard",
  ADDCUSTOMER: "/customer/add",
  EDITCUSTOMER: "/customer/edit",
  VIEWCUSTOMER: "/customer/view",
  ADDVENDOR: "/vendor/add",
  EDITVENDOR: "/vendor/edit",
  VIEWVENDOR: "/vendor/view",
  ADDSALES: "/sales/add",
  LOGIN: "/",
  REGISTER: "/register",
  LOGOUT: "/logout",
  FORGOTPASSWORD: "/forgot-password",
  OTP: "/otp",
  UPDATEADMIN: "/update-admin",
  VIEWADMIN: "/view-admin",
  ADDWALLET: "/add-wallet",
  QRCODE: "/generate-qr-code",
  PAYPRIZE: "/pay-prize",
};

const menuItems = [
  {
    key: "dashboard",
    icon: <SpeedIcon />,
    label: "Dashboard",
    url: APP_LINK.DASHBOARD,
  },
  {
    key: "admin",
    icon: <BorderColorOutlinedIcon />,
    label: "Admin",
    submenu: [
      { name: "Update Admin", url: APP_LINK.UPDATEADMIN },
      { name: "View Admin", url: APP_LINK.VIEWADMIN },
    ],
  },
  {
    key: "customer",
    icon: <BorderColorOutlinedIcon />,
    label: "Customer",
    submenu: [
      { name: "Add Customer", url: APP_LINK.ADDCUSTOMER },
      { name: "Update Customer", url: APP_LINK.EDITCUSTOMER },
      { name: "View Customer", url: APP_LINK.VIEWCUSTOMER },
      { name: "Add Wallet", url: APP_LINK.ADDWALLET },
    ],
  },
  {
    key: "vendor",
    icon: <PeopleOutlineOutlinedIcon />,
    label: "Vendor",
    submenu: [
      { name: "Add Vendor", url: APP_LINK.ADDVENDOR },
      { name: "Update Vendor", url: APP_LINK.EDITVENDOR },
      { name: "View Vendor", url: APP_LINK.VIEWVENDOR },
    ],
  },
  {
    key: "sales",
    icon: <CloudSyncOutlinedIcon />,
    label: "Sales",
    submenu: [
      { name: "Payment", url: APP_LINK.PAYPRIZE },
      { name: "Generate-QR", url: APP_LINK.QRCODE },
    ],
  },
  {
    key: "login",
    icon: <SpeedIcon />,
    label: "Login",
    url: APP_LINK.LOGIN,
  },
  {
    key: "logout",
    icon: <SpeedIcon />,
    label: "Logout",
    url: APP_LINK.LOGOUT,
  },
  {
    key: "forgotPassword",
    icon: <SpeedIcon />,
    label: "Forgot Password",
    url: APP_LINK.FORGOTPASSWORD,
  },
];

export default menuItems;
