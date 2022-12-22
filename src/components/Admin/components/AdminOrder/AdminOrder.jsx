import React from "react";
import "./AdminOrder.scss";
import AdminOrderMenu from "./AdminOrderMenu/AdminOrderMenu";
import {Router, Route, Routes } from "react-router-dom";
import AdminOrderAll from "./AdminOrderAll/AdminOrderAll";


function AdminOrder(props) {

  return (
    
      <div className="order">
        <span>Orders</span>
        

        <AdminOrderAll />
      </div>

  );
}

export default AdminOrder;
