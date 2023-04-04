
import React,{useParams} from "react";
import { Redirect, Route, Routes ,Link, Navigate} from "react-router-dom";

import Home from "../pages/Home";
import Tablet from "../pages/Tablet";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Watch from "../pages/Watch";
import EmptyCart from '../components/Cart/EmptyCart'

import SmartPhone from "../pages/SmartPhone";
import SmartTV from "../pages/SmartTV";


import SmartWatch from "../pages/SmartWatch";
import CheckoutCart from "../components/Cart/CheckoutCart";
import Acessories from "../pages/Acessories"
import Laptop from "../pages/Laptop";
import SmartHome from "../pages/SmartHome";
import ProductDetail from "../pages/ProductDetail";
import Admin from "../pages/Admin";
import AdminCreate from "../components/Admin/components/AdminProduct/AdminCreate";
import DataFilterProduct from "../components/Admin/components/AdminProduct/DataFilterProduct/DataFilterProduct";
import AdminUpdate from "../components/Admin/components/AdminProduct/AdminUpdate";
import ReviewProduct from "../components/Admin/components/AdminProduct/ReviewProduct/ReviewProduct";
import AdminProduct from "../components/Admin/components/AdminProduct/AdminProduct";
import AdminOrder from "../components/Admin/components/AdminOrder/AdminOrder";
import Dashboard from "../components/Admin/pages/Dashboard";
import AdminUser from "../components/Admin/components/AdminUser/AdminUser";
import Profile from "../components/Profile/Profile";
import AdminCate from "../components/Admin/components/AdminCate/AdminCate";
import AdminCreateCate from "../components/Admin/components/AdminCate/AdminCreateCate";
import MyOrders from "../pages/MyOrders";
import ForgotPassword from "../pages/ForgotPassword";
import GmailOTP from "../components/ForgotPassword/GmailOTP";
import ChangePassword from "../components/ForgotPassword/ChangePassword";
import Thankyou from "../pages/Thankyou";
import ResetPassword from "../components/Profile/ResetPassword";
import ModalAddress from "../components/Cart/ModalAddress";
// import Orders from "../components/Admin/Orders/Orders"
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import { ViewListWatch } from "../components/Watch/ChildPage/ViewListWatch";

import SubProduct from "../pages/SubProduct";

import News24h from "../components/Tech24h/News24h";
import Hoidap from "../components/Tech24h/Hoidap";
import Gameapp from "../components/Tech24h/Gameapp";
import Brand from "../components/Admin/components/AdminCate/SubAdminCate/Brand";
import Specification from "../components/Admin/components/AdminCate/SubAdminCate/Specification";
import Cate from "../components/Admin/components/AdminCate/SubAdminCate/Cate";
import AdminEvent from "../components/Admin/components/AdminEvent/AdminEvent";
import AdminVoucher from "../components/Admin/components/AdminVoucher/AdminVoucher";


const Router = () => {
  
  const { currentUser } = useSelector(state => state.user)

  return (
    <Routes>
      {/* HOME */}
      <Route path='/'  element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />

      {/* LOGIN */}
      <Route path='/dang-nhap'  element={
        <ProtectedRoute>
        <Login />
      </ProtectedRoute>
      }/>

      <Route path='/quen-mat-khau'  element={
        <ProtectedRoute>
          <ForgotPassword />
      </ProtectedRoute>
      }/>
      <Route path='/sendOTP'  element={
      <ProtectedRoute>
      <GmailOTP />
    </ProtectedRoute>}/>

      <Route path='/change-password'  element={<ProtectedRoute>
      <ChangePassword />
    </ProtectedRoute>}/>


      <Route path='/reset-password'  element={
        <ProtectedRoute>
        <ResetPassword />
      </ProtectedRoute>
      }/>


      <Route path='/profile'  element={
        <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
      }/>


      {/* TABLET */}
      <Route path='/Tablet/:id'  element={
        <ProtectedRoute>
        <Tablet />
      </ProtectedRoute>
      } />

      <Route path='/dang-ky'  element={<ProtectedRoute>
      <Register />
    </ProtectedRoute>} />
      
      {/* WATCHES */}
      <Route path='/Đồng hồ/:id'  element={
        <ProtectedRoute>
        <Watch />
      </ProtectedRoute>
      } />

      <Route path="/xem-them-dong-ho" element={ViewListWatch}/>

      <Route path='/empty-cart'  element={
        <ProtectedRoute>
        <EmptyCart />
      </ProtectedRoute>
      } />
     

      {/* SMART PHONE */}
      <Route path='/Điện thoại/:id'  element={<ProtectedRoute>
      <SmartPhone />
    </ProtectedRoute>} />

      {/* SMART TV */}
      <Route path='/Tivi/:id'  element={<ProtectedRoute>
      <SmartTV />
    </ProtectedRoute>} />


      {/* ACCESSORIES  */}
      <Route path='/Phụ kiện/:id'  element={
      <ProtectedRoute>
      <Acessories />
    </ProtectedRoute>} />


      {/* SMART WATCH  */}
      <Route path='/Smartwatch/:id'  element={<ProtectedRoute>
      <SmartWatch />
    </ProtectedRoute>} />

      {/* CART */}
      <Route path='/cart'  element={
       <ProtectedRoute>
          <CheckoutCart />
     </ProtectedRoute>
    } />

      {/* LAPTOP */}

      <Route path='/Laptop/:id'  element={<ProtectedRoute>
      <Laptop />
    </ProtectedRoute>} />

      {/* SMARTHOME */}
      <Route path='/Nhà thông minh/:id'  element={<ProtectedRoute>
      <SmartHome />
    </ProtectedRoute>} />
      

      {/* PRODUCT DETAIL */}
      <Route path='/product/:id'  element={<ProtectedRoute>
      <ProductDetail />
    </ProtectedRoute>} />

      {/* ORDER */}

      <Route path='/myOrder' element={<ProtectedRoute>
      <MyOrders />
    </ProtectedRoute>}/>


      <Route path='/:category/:sub/:id' element={<ProtectedRoute>
        <SubProduct />
    </ProtectedRoute>}/>
       


      {/* ADMIN */}
      <Route path="/admin" element={<Admin />}>

          <Route index element={<Dashboard />} />
          {/* <Route path="categories" element={<AdminCategory />} /> */}

          <Route path="product" element={<AdminProduct />} />
          <Route path="product/create" element={<AdminCreate />} />
          <Route path="product/update/info/:id" element={<AdminUpdate />} />
  
          {/* <Route path="customers" element={<AdminCustomer />} /> */}
          <Route path="order" element={<AdminOrder />} />
          <Route path="customer" element={<AdminUser />} />
          <Route path="event" element={<AdminEvent />} />
          <Route path="voucher" element={<AdminVoucher />} />



          {/* <Route path="category" element={<AdminCate />} /> */}
          <Route path="category" element={<AdminCate />}>
            <Route index element={<Cate/>} />
            <Route path="brand" element={<Brand />} />
            <Route path="specification" element={<Specification />} />  
          </Route> 
          

          <Route path="category/create" element={<AdminCreateCate />} />

          
          

      </Route>

      <Route path="*" element={<Navigate to="/" />} />


      <Route path="/thanks" element={<ProtectedRoute>
      <Thankyou />
    </ProtectedRoute>} />
      
      {/* <Route path="/them-dia-chi" element={<ModalAddress/>}/> */}

      {/* TECH24H */}

      <Route path="/news24h" element={<News24h/>}/>
      <Route path="/hoidap" element={<Hoidap/>}/>
      <Route path="/gameApp" element={<Gameapp/>}/>


    </Routes>
    
  );
};

export default Router;
