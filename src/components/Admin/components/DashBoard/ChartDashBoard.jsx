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

        const dispatch = useDispatch()

       
        const { sale_figure, list_sale_date } = useSelector(state => state.admin)

        const [dateStart, setDateStart] = useState(new Date())
        const [dateEnd, setDateEnd] = useState()

        // console.log('start: ', dateStart.toLocaleDateString())

        // const date_start = new Date(dateStart?.timeStamp)

      
      // console.log('date end: ', dateEnd.split('-').reverse().join('/'))

        const [saleDate, setSaleDate] = useState([])
        const [listSale,setListSale] = useState([])
        const [listSell,setListSell] = useState([])



        

        const [startDate, setStartDate] = useState()

        console.log(startDate)
        const list_date = useCallback(() => {

          sale_figure.forEach(element => {


            

            const date = element.order_date?.split('/').slice(0,2).reverse().join('/')
            
            


            saleDate.push(date)

            console.log(date)
            console.log(saleDate)
        });

        },[sale_figure])

        // list_date()


        console.log('sale date: ', saleDate)
        console.log('list sale: ', listSale)
        console.log('list sell: ', listSell)

       
        useEffect(() => {
            dispatch(saleFigure())
        },[])


        // useEffect(() => {
        //   sale_figure.forEach(el => {
        //     console.log('sale_figure: ', sale_figure)

        //     if(!sale_figure){
        //         setSaleDate(prev => [])
        //         setListSale(prev => [])
        //         setListSell(prev => [])
        //     }

        //       const date = el.order_date.split('/').splice(0,2).reverse().join('/')
        //       const sales = (el.sales / 1000000).toFixed(3)

        //       if(!saleDate.includes(date))
        //       {

        //         saleDate.push(date)
        //         listSale.push(sales)
        //         listSell.push(el.quantity)
        //         // setSaleDate(prev => [...saleDate].concat(date))
                
        //         // setListSale(prev => [...listSale].concat(sales))
        //         // setListSell(prev => [...listSell].concat(el.quantity))
               
        //       }
        //   });


        // },[sale_figure])
        const handleOnClick = () => {

          if(dateStart && dateEnd)
          {
            const data = {
              date_start: dateStart,
              date_end: dateEnd
            }
  
            dispatch(selectSaleDate(data))
  
          }
        }

        


 


 
  


  


  


  

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
