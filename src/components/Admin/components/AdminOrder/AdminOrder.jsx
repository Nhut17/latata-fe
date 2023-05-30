import React, { useEffect } from "react";
import "./AdminOrder.scss";
import AdminOrderMenu from "./AdminOrderMenu/AdminOrderMenu";
import {Router, Route, Routes } from "react-router-dom";
import AdminOrderAll from "./AdminOrderAll/AdminOrderAll";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FolderOpenOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../redux/Order/orderSlice";


function AdminOrder(props) {

  const {listOrder} = useSelector(state => state.order)
  const statusOrderPending = listOrder.filter(listOrder => listOrder.status == `PENDING`)
  const statusOrderDelivering = listOrder.filter(listOrder => listOrder.status == `DELIVERING`)

  const dispatch = useDispatch()
    
    useEffect(() => {

        dispatch(getAllOrder())
        
    },[])

  return (
    
    
      <div className="order">

        <span>Orders</span>
        <Tabs>
            <TabList>
              <Tab>
                <div className="order-pending">
                  <p className="tab-pending">Chờ xác nhận

                    <span className="quantity">{statusOrderPending.length}</span>

                  </p>

                  
                </div>
              </Tab>

              <Tab>Đang giao</Tab>
              
              <Tab>Đã giao</Tab>
              <Tab>Đã hủy</Tab>
            </TabList>

            <TabPanel>
              <AdminOrderAll listOrder={listOrder} status={'PENDING'} />
            </TabPanel>
            
          
              {
                statusOrderDelivering.length == 0 ? (
                  <TabPanel>
                      <div className="empty-order">
                      <p>
                        <FolderOpenOutlined />
                        <p>Chưa có đơn hàng nào</p>

                      </p>
                    </div>
                  </TabPanel>
                ):(
                  <TabPanel>
                      <AdminOrderAll listOrder={listOrder} status={'DELIVERING'} />
                  </TabPanel>
                )
              }

          

            <TabPanel>
              <AdminOrderAll listOrder={listOrder} status={'DONE'}/>
            </TabPanel>

            <TabPanel>
            <AdminOrderAll listOrder={listOrder} status={'CANCELLED'} />
            </TabPanel>
        </Tabs>

        
      </div>

  );
}

export default AdminOrder;
