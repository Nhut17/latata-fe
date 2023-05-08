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
              <AdminOrderAll/>
            </TabPanel>
            {
                lengthOrder == 0 ?  
                (<TabPanel>

                  <div className="empty-order">
                    <p>
                      <FolderOpenOutlined />
                      <p>Chưa có đơn hàng nào</p>

                    </p>
                  </div>
                </TabPanel>)
                :              
                (<TabPanel>Đang giao</TabPanel>)

            }

            <TabPanel>
              <h2>Đã giao</h2>
            </TabPanel>

            <TabPanel>
              <h2>Đã hủy</h2>
            </TabPanel>
        </Tabs>

        
      </div>

  );
}

export default AdminOrder;
