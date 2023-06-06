import React, { useEffect } from "react";
import {
  ShoppingCartOutlined,
  DollarCircleOutlined,
  UsergroupDeleteOutlined,
  SkinOutlined,
} from "@ant-design/icons";
import "./DashBoard.scss";
import ChartDashBoard from "./ChartDashBoard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, resetActionAdmin } from "../../../../redux/Admin/adminSlice";
import { getAllOrder } from "../../../../redux/Order/orderSlice";
import { getCate } from "../../../../redux/Category/categorySlice";
import { getProduct } from "../../../../redux/Product/productSlice";
import { Link } from "react-router-dom";

export default function DashBoard() {

  const dispatch  = useDispatch()
  const { listUser } = useSelector(state => state.admin)
  const { listProduct } = useSelector(state => state.product)
  const { listOrder } = useSelector(state => state.order)
  const { listCate } = useSelector(state => state.category)


  useEffect(() => {
    dispatch(getAllUser())
    dispatch(getProduct())
    dispatch(getAllOrder())
    dispatch(getCate())


}, [])

  return (
    <section id="dashboard">
      <div className="dashboard">
        <div className="dashboard-top">
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-middle-statistic">
            <div className="dashboard-middle-statistic-content" >
              <li style={{background : '#990000'}}>
                <div className="dashboard-middle-statistic-icon">
                  <UsergroupDeleteOutlined />
                </div>
                <Link to='/admin/customer' className="dashboard-middle-statistic-title">
                  <span className="total">{listUser?.length}</span>
                  <span className="title" style={{fontSize: '20px'}}>Người dùng</span>
                </Link>
              </li>
            </div>
            <Link to='/admin/product' className="dashboard-middle-statistic-content">
              <li style={{background : '#2B7A0B'}}>
                <div className="dashboard-middle-statistic-icon">
                <DollarCircleOutlined/>

                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">{listProduct?.length}</span>
                  <span className="title">Sản phẩm</span>
                </div>
              </li>
            </Link>

            <Link to='/admin/category' className="dashboard-middle-statistic-content">
              <li style={{background : '#000957'}}>
                <div className="dashboard-middle-statistic-icon">
                  <SkinOutlined />
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">{listCate?.length}</span>
                  <span className="title">Danh mục</span>
                </div>
              </li>
            </Link>
            <Link to='/admin/order' className="dashboard-middle-statistic-content">
              <li style={{background : '#D4AC2B'}}>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingCartOutlined />
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">{listOrder?.length}</span>
                  <span className="title">Đơn hàng</span>
                </div>
              </li>
            </Link>
            
          </div>
        </div>

        <ChartDashBoard></ChartDashBoard>
       
      </div>
    </section>
  );
}
