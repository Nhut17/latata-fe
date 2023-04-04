import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./Sidebar.scss";
import {
  AppstoreOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  OrderedListOutlined,
  WechatOutlined,
  LogoutOutlined,
  ProfileOutlined,
  MessageOutlined,
  CalendarOutlined,
  ShakeOutlined
} from "@ant-design/icons";
import clx from 'classnames'

import logo from '../../../../assets/images/logo_color.png'
import { useDispatch, useSelector } from "react-redux";
import { logout, logoutUser } from "../../../../redux/User/userSlice";

function Sidebar(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const {currentUser} = useSelector(state => state.user)

    const handleLogout = () => {
        dispatch(logoutUser())
        localStorage.clear()
        navigate(0)
    }

    useEffect(() => {
      if(!currentUser){
        navigate('/')
      }
    },[])

  

    const getPara = window.location.href.split('/')[4]
    console.log('s: ' + getPara)

   

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          {/* <img src={logo}></img> */}
          <h4>LATATA</h4>
        </div>
        <div className="sidebar-list">

          <Link to="/admin" className={'sidebar-list-item'}
          style={getPara == undefined ? {
              background : '#007aff',
              color : 'white'
          } : {}}
            
          >
            <span >
              <AppstoreOutlined></AppstoreOutlined>
            </span>
            <p>Trang chủ</p>
          </Link>

          <Link to="/admin/customer" className={`sidebar-list-item`} style={getPara == 'customer' ? {
            background : '#007aff',
            color : 'white'
          } : {}} >
            <span>
              <UsergroupAddOutlined></UsergroupAddOutlined>
            </span>
            <p>Người dùng</p>
          </Link>

          <Link to="/admin/product" className={'sidebar-list-item'}  style={getPara == 'product' ? {
            background : '#007aff',
            color : 'white'
          } : {}}>
            <span>
              <ShopOutlined></ShopOutlined>
            </span>
            <p>Sản phẩm</p>
          </Link>

          <Link to="/admin/order" className={'sidebar-list-item'} style={getPara == 'order' ? {
            background : '#007aff',
            color : 'white'
          } : {}}>
            <span>
              <OrderedListOutlined></OrderedListOutlined>
            </span>
            <p>
              Đơn hàng
              {/* <div className="admin-order-new">
                  10
                </div> */}
            </p>
          </Link>


          <Link to="/admin/category" className={'sidebar-list-item'} style={getPara == 'category' ? {
            background : '#007aff',
            color : 'white'
          } : {}}>
            <span>
              <ProfileOutlined/>
            </span>
            <p>
              Danh mục
            
            </p>  
          </Link>

          {/* <Link to="/admin/chat" className={'sidebar-list-item'} >
            <span>
            <MessageOutlined />
            </span>
            <p>Chat</p>
          </Link> */}

          <Link to="/admin/event" className={'sidebar-list-item'} >
            <span>
              <CalendarOutlined />
            </span>
            <p>Sự kiện</p>
          </Link>

          <Link to="/admin/voucher" className={'sidebar-list-item'} >
            <span>
              <ShakeOutlined />
            </span>
            <p>Mã giảm giá</p>
          </Link>
          <div className="sidebar-list-item" onClick={handleLogout}>
            <span >
            <LogoutOutlined />
            </span>
            <p>
             Đăng xuất
            
            </p>  
          </div>
          
        </div>
      </div>

      
    </>
  );
}

export default Sidebar;
