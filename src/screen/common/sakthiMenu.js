import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import Admin from "@mui/icons-material/AdminPanelSettings";
import Customer from "@mui/icons-material/SupervisorAccount";
import Sales from "@mui/icons-material/PointOfSale";
import ForgotPassword from "@mui/icons-material/Password";

export const APP_LINK = {
  DASHBOARD: "/dashboard",
  ADDCUSTOMER: "/customer/add",
  EDITCUSTOMER: "/customer/edit/:id",
  VIEWCUSTOMER: "/customer/view",
  CUSTOMERS: "/customer/list",
  ADDVENDOR: "/vendor/add",
  EDITVENDOR: "/vendor/edit/:id",
  VENDORS: "/vendor/list",
  VIEWVENDOR: "/vendor/view",
  ADDPAYMENT: "/transaction/add",
  TRANSACTIONS: "/transaction/list",
  LOGIN: "/",
  REGISTER: "/register",
  LOGOUT: "/logout",
  FORGOTPASSWORD: "/forgot-password",
  CHANGEPASSWORD: "/change-password",
  OTP: "/otp",
  UPDATEADMIN: "/update-admin",
  VIEWADMIN: "/view-admin",
  ADDWALLET: "/customer/add/wallet/:id",
  PAYPRIZE: "/pay-prize",
  PARTICULARVENDOR: "/vendor/view/:id",
  PARTICULARCUSTOMER: "/customer/view/:id",
  WALLETLIST: "/customer/wallet/list",
  PARTICULARLIST: "/customer/wallet/list/:ID",
  UPDATELIST: "/customer/wallet/update/:",
  CUSTOMERDASHBOARD: "/customer/dashboard",
  VENDORDASHBOARD: "/vendor/dashboard",
  VENDORPAYMENTLIST: "/vendor/payment/list/:id",
  CUSTOMERTRANSACTION: "/customer/transaction/list/:id",
};

const menuItems = [
  {
    key: "dashboard",
    icon: <SpeedIcon />,
    label: "Dashboard",
    url: APP_LINK.DASHBOARD,
  },

  {
    key: "customers",
    icon: <Customer />,
    label: "Customers",
    url: APP_LINK.CUSTOMERS,
  },
  {
    key: "vendors",
    icon: <PeopleOutlineOutlinedIcon />,
    label: "Vendors",
    url: APP_LINK.VIEWVENDOR,
  },
  {
    key: "Transactions",
    icon: <Sales />,
    label: "Transactions",
    submenu: [
      { name: "Add Payment", url: APP_LINK.PAYPRIZE },
      { name: "Payment History", url: APP_LINK.TRANSACTIONS },
    ],
  },

  // {
  //   key: "forgotPassword",
  //   icon: <ForgotPassword />,
  //   label: "Change Password",
  //   url: APP_LINK.FORGOTPASSWORD,
  // },
  {
    key: "profile",
    icon: <Admin />,
    label: "My Profile",
    url: APP_LINK.VIEWADMIN,
  },
];

export default menuItems;
