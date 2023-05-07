import React, {useCallback, useEffect, useState} from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { saleFigure, selectSaleDate } from "../../../../redux/Admin/adminSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrder } from "../../../../actions/OrderAction";
import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import vi from 'date-fns/locale/vi'
import styled from "styled-components";
import ChartLine from "./Chart/ChartLine";
import ChartPie from "./Chart/ChartPie";
import ChartColumn from "./Chart/ChartColumn";


export default function ChartDashBoard() {

        

  return (
    <>
    <div className="dashboard-middle-chart flex j-between">

      <ChartLine/>

      <ChartPie/>

          
      </div>


      <ChartColumn/>

    </>
  );
}
