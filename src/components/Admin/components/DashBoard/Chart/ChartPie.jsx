import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSalesCategoriesMonth, getSalesCategoriesYear, selectSaleDate } from '../../../../../redux/Admin/adminSlice';
import { motion } from 'framer-motion'


const ChartPie = () => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(0);

    const handleClick = e => {
    const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };


    // state date
    const [dateStart, setDateStart] = useState(new Date())
    const [dateEnd, setDateEnd] = useState()

    // state admin
    const { sale_cates } = useSelector(state => state.admin)
    const { listCate }  = useSelector(state => state.category)

    // state list cate
    const [listCates,setListCates] = useState([])



    

    // dispatch
    useEffect(() => {

      //date
      const date = new Date()
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      // active click  year or month
      if(active == 0)
      {
       
        dispatch(getSalesCategoriesMonth({
          year: 2023,
          month: 4
        }))
      }
      else{
        dispatch(getSalesCategoriesYear(year))
      }

    },[active])



    const [saleCates, setSaleCates] = useState([])

    // set up chart
    useEffect(() => {
        const list_cate =[]
        listCate?.forEach(el => {
            if(!list_cate.includes(el.name))
            {
              list_cate.push(el.name)
            }
        })

      if(list_cate.length > 0)
      {
        setListCates(list_cate)
      }

    },[])


    // set up sales for chart category
    useEffect(() => {
      const list_sales = []
     
      if(listCates.length > 0 )
      {
        listCates.forEach( el => {
          sale_cates?.categories?.forEach(val => {
              if(val.cate == el)
              {     
                const sale = val.sales_cate / 1000000
                // list_sales.push(sale.toFixed(2))
                list_sales.push(val.sales_cate)
              }
          })
        })
      }

     if(list_sales.length > 0) {
      setSaleCates(list_sales)
     } 

    },[listCates,sale_cates])



    const chart_pie_options ={
        series: saleCates,
        
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: listCates,
          legend: {
            position: 'bottom',
            horizontalAlign: 'left',
           
          
          },
          colors: ['#c00', '#d06', '#007', '#00f', '#2cc','#394','#cc0','#c70'],
          
    
        }
      }
    return (
        <div className="chart-pie" style={{'width': '34%'}}>
            <div className="filter-chart-pie">

                <div className="group-btn " 
                     style={{
                      width: '200px',
                      display: 'flex',
                      marginBottom: '10px',
                    
                     }} >


                
                <div className="month" >
                  <button onClick={handleClick} active={active === 0} id={0}
                          style={{
                            padding: '7px 15px',
                            border: '1px solid ',
                            borderTopLeftRadius: '5px',
                            borderBottomLeftRadius: '5px',
                            transition: 'all 0.4s',
                            background: active == 0 ? 'white' : '#6dabe4',
                            color: active == 0 ? '' : 'white'
                          }}
                  >Tháng</button>
                   
                </div>
                <div className="year">
                    <button onClick={handleClick} active={active === 1} id={1}
                              style={{
                        
                                padding: '7px 15px',
                                border: '1px solid black',
                                borderTopRightRadius: '5px',
                                borderBottomRightRadius: '5px',
                                borderLeft: 'transparent',
                                transition: 'all 0.4s',
                              }}
                    >Năm</button>

                </div>
                </div>
                <div className="filter-option">
        
                {/* <div className="filter-result">
                    <button >Lọc kết quả</button>
                </div> */}
                </div>
            </div>

            <Chart
            options={chart_pie_options.options}
            series={chart_pie_options.series}
            type='pie'
            width={380}
            />
        </div>
    )
}

export default ChartPie