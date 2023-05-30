import React from "react";
import "./AdminOrder.scss";
import AdminOrderMenu from "./AdminOrderMenu/AdminOrderMenu";
import {Router, Route, Routes } from "react-router-dom";
import AdminOrderAll from "./AdminOrderAll/AdminOrderAll";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FolderOpenOutlined } from "@ant-design/icons";


function AdminOrder(props) {
  let lengthOrder = 0
  return (
    
      <div className="order">

        <span>Orders</span>
        <Tabs>
            <TabList>
              <Tab>
                <div className="order-pending">
                  <p className="tab-pending">Chờ xác nhận

                    <span className="quantity">1</span>

                  </p>

                  
                </div>
              </Tab>

              <Tab>Đang giao</Tab>
              
              <Tab>Đã giao</Tab>
              <Tab>Đã hủy</Tab>
            </TabList>

            <TabPanel>
              <AdminOrderAll status={'PENDING'} />
            </TabPanel>
            
            <TabPanel>
              <AdminOrderAll status={'DELIVERING'} />

            </TabPanel>

            <TabPanel>
              <AdminOrderAll status={'DONE'}/>
            </TabPanel>

            <TabPanel>
            <AdminOrderAll status={'CANCELLED'} />
            </TabPanel>
        </Tabs>

        
      </div>

  );
}

export default AdminOrder;
