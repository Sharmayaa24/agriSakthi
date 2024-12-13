import { Routes, Route, useLocation } from "react-router-dom";
import AddCustomer from "../screen/Customer/CustomerAdd";
import UpdateCustomer from "../screen/Customer/CustomerUpdate";
import { CssBaseline } from "@mui/material";
import SideBar from "../screen/common/sakthiSide";
import { APP_LINK } from "../screen/common/sakthiMenu";
import TopBar from "../screen/common/shakthiTop";
import "../Styles/style.css";
import Login from "../screen/auth/login";
import Register from "../screen/auth/signup";
import ForgotPassword from "../screen/auth/forgot";
import OtpPage from "../screen/auth/otp";
import ViewCustomer from "../screen/Customer/ViewCustomer";

import React from 'react';

const RouteComponent = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === APP_LINK.LOGIN ||
    location.pathname === APP_LINK.REGISTER ||
    location.pathname === APP_LINK.FORGOTPASSWORD ||
    location.pathname === APP_LINK.OTP;
  return (
    <div>
      <CssBaseline />
      <div className="app">
        {!isAuthPage && <SideBar />}
        <main className="content">
          {!isAuthPage && <TopBar />}
          <Routes>
            <Route path={APP_LINK.LOGIN} element={<Login />} />
            <Route path={APP_LINK.REGISTER} element={<Register />} />
            <Route
              path={APP_LINK.FORGOTPASSWORD}
              element={<ForgotPassword />}
            />
            <Route path={APP_LINK.OTP} element={<OtpPage />} />
            <Route path={APP_LINK.ADDCUSTOMER} element={<AddCustomer />} />
            <Route path={APP_LINK.EDITCUSTOMER} element={<UpdateCustomer />} />
            <Route path={APP_LINK.VIEWCUSTOMER} element={<ViewCustomer />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default RouteComponent;