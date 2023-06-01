import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
// import Listcate from "./Listcate";
import "./AdminCate.scss";
import { getCate } from "../../../../redux/Category/categorySlice";
import ListCate from "./ListCate";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Cate from "./SubAdminCate/Cate";
import Specification from "./SubAdminCate/Specification";
// import Brand from "./SubAdminCate/Brand"
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

          

            {/* <Tabs>
                <TabList>
                    <Tab>
                        Danh mục
                    </Tab>

                    <Tab>
                        Hãng
                    </Tab>

                    <Tab>
                        Thông số kĩ thuật
                    </Tab>
                </TabList>

             
                <TabPanel>
                    <Cate/>
                </TabPanel>
                <TabPanel>
                    <Brand/>
                </TabPanel>
                <TabPanel>

                    <Specification/>
                </TabPanel>

              
            </Tabs> */}


            

            <CateNavBar/>

            <Outlet/>
            

        </div>
    );
}

export default AdminCate;
