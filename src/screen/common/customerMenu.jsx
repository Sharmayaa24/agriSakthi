import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import Admin from "@mui/icons-material/AdminPanelSettings";
import Customer from "@mui/icons-material/SupervisorAccount";
import ForgotPassword from "@mui/icons-material/Password";
import { APP_LINK } from "./sakthiMenu";


const customermenuItems = [
  {
    key: "dashboard",
    icon: <SpeedIcon />,
    label: "Dashboard",
    url: APP_LINK.CUSTOMERDASHBOARD,
  },
  
  {
    key: "Transaction",
    icon: <Customer />,
    label: "Transaction",
    url:APP_LINK.TRANSACTIONS,
  },
  
  // {
  //   key: "forgotPassword",
  //   icon: <ForgotPassword />,
  //   label: "Change Password",
  //   url: APP_LINK.FORGOTPASSWORD,
  // },
  // {
  //   key: "profile",
  //   icon: <Admin />,
  //   label: "My Profile",
  //   url: APP_LINK.EDITCUSTOMER,
  // },

];

export default customermenuItems;
