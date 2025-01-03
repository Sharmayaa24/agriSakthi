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
import AddVendor from "../screen/Vendor/AddVendor";
import UpdateVendor from "../screen/Vendor/UpdateVendor";
import ViewVendor from "../screen/Vendor/ViewVendor"
import UpdateAdmin from "../screen/admin/updateAdmin";
import ViewAdmin from "../screen/admin/viewAdmin";
import AddAmount from "../screen/sales/addAmount";
import AddWallet from "../screen/Customer/AddWallet";
import Dashboard from "../screen/DashBoard"
import Dummy from "../screen/dummy";
import ListPayments from "../screen/sales/listPayment";
import DetailsTable from "../screen/Vendor/vendorParticularDetails";
import CustomerTable from "../screen/Customer/CustomerParticularDetails";
import ViewWallet from "../screen/wallet/viewAllWallet";
import CustomerSideBar from "../screen/CustomerSidebar"
import VendorSideBar from "../screen/VendorSidmenu"
import VendorPaymentList from "../screen/sales/vendorTransactionList";
import VendorDashboard from "../screen/VendorDashboard";
import CustomerDashboard from "../screen/CustomerDashboard";
import CustomerPaymentList from "../screen/sales/customerTransaction";
import { useDispatch, useSelector } from 'react-redux';
import "../Styles/style.css"
import React from 'react';
import ChangePassword from "../screen/auth/changePassword";
const RouteComponent = () => {
const location = useLocation();
const newuser = useSelector((state) => state.login.user);
let userType = null;

if (newuser) {
  userType = newuser.data?.user?.user_type;
}
const role = localStorage.getItem("UserType");
console.log(role);
const RenderSidebar = () => {
  switch (role) {
    case "1":
      return <SideBar />;
    case "2":
      return <VendorSideBar />;
    case "3":
      return <CustomerSideBar />;
    default:
      return null;
  }
};
  const isAuthPage =
    location.pathname === APP_LINK.LOGIN ||
    location.pathname === APP_LINK.REGISTER ||
    location.pathname === APP_LINK.FORGOTPASSWORD ||
    location.pathname === APP_LINK.OTP||
    location.pathname === APP_LINK.CHANGEPASSWORD;

  return (
    <div>
      <CssBaseline />
      <div className="app">
        {!isAuthPage && RenderSidebar()}
        <main className="content">
          {!isAuthPage && <TopBar />}
          <Routes>
            <Route path={APP_LINK.LOGIN} element={<Login />} />
            <Route path={APP_LINK.REGISTER} element={<Register />} />
            <Route path={APP_LINK.FORGOTPASSWORD} element={<ForgotPassword />} />
            <Route path={APP_LINK.OTP} element={<OtpPage />} />
            <Route path={APP_LINK.ADDCUSTOMER} element={<AddCustomer />} />
            <Route path={APP_LINK.EDITCUSTOMER} element={<UpdateCustomer />} />
            <Route path={APP_LINK.CUSTOMERS} element={<ViewCustomer />} />
            <Route path={APP_LINK.ADDVENDOR} element={<AddVendor />} />
            <Route path={APP_LINK.EDITVENDOR} element={<UpdateVendor />} />
            <Route path={APP_LINK.VIEWVENDOR} element={<ViewVendor />} />
            <Route path={APP_LINK.UPDATEADMIN} element={<UpdateAdmin />} />
            <Route path={APP_LINK.VIEWADMIN} element={<ViewAdmin />} />
            <Route path={APP_LINK.ADDWALLET} element={<AddWallet />} />
            <Route path={APP_LINK.PAYPRIZE} element={<AddAmount />} />
            <Route path={APP_LINK.TRANSACTIONS} element={<ListPayments />} />
            <Route path={APP_LINK.PARTICULARVENDOR} element={<DetailsTable />} />
            <Route path={APP_LINK.PARTICULARCUSTOMER} element={<CustomerTable />} />
            <Route path={APP_LINK.WALLETLIST} element={<ViewWallet />} />
            <Route path={APP_LINK.VENDORPAYMENTLIST} element={<VendorPaymentList />} />
            <Route path={APP_LINK.DASHBOARD} element={<Dashboard />} />
            <Route path={APP_LINK.VENDORDASHBOARD} element={<VendorDashboard /> }/>
            <Route path={APP_LINK.CUSTOMERDASHBOARD} element={<CustomerDashboard /> }/>
            <Route path={APP_LINK.CHANGEPASSWORD} element={<ChangePassword /> }/>
            <Route path={APP_LINK.CUSTOMERTRANSACTION} element={<CustomerPaymentList />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default RouteComponent;