import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
// import Listcate from "./Listcate";
import "./AdminCate.scss";
import { getCate } from "../../../../redux/Category/categorySlice";
import ListCate from "./ListCate";
import CateNavBar from "./SubAdminCate/CateNavBar";


function AdminCate() {
 
    
   

    return (
        <div className="admin-box-cate">
            {/* <div className="admin-cate-link">

                <Link to="/admin/category/create">
                    <button >
                        + Add Cate
                    </button>
                </Link>
            </div> */}

          

            <CateNavBar>
                <Outlet/>

            </CateNavBar>


            

            

            {/* <Outlet/> */}
            

        </div>
    );
}

export default AdminCate;
