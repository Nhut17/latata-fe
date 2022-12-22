import React from "react";
import { useSelector } from "react-redux";
import "././MainAdmin.scss";
import {  Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import AdminNavBar from "./components/AdminNavBar/AdminNavBar";

// import Routes from "../../routes/Routes";

function MainAdmin (props) {
  
  return (
    

    <div className="admin">
            
      <AdminNavBar>
        <Outlet />
      </AdminNavBar>


      
    </div>
    
  );
}

export default MainAdmin;
