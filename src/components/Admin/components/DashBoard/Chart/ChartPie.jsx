import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSalesCategoriesMonth, getSalesCategoriesYear, selectSaleDate } from '../../../../../redux/Admin/adminSlice';
import { motion } from 'framer-motion'
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  

const ChartPie = () => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(0);

   
    // state admin
    const { sale_cates_year, sale_cates_month } = useSelector(state => state.admin)
    const { listCate }  = useSelector(state => state.category)


    console.log(sale_cates_year)

    // state list cate
    const [listCates,setListCates] = useState([])

     //date
     const date = new Date()
     const [month,setMonth] = useState(date.getMonth() + 1)
     const [year,setYear] = useState(date.getFullYear())


    // handle select sale month or year
    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
        if (index !== active) {
          setActive(index);
        }
      };
  
  


    // dispatch
    useEffect(() => {

  

      // dispatch sale cates month
        dispatch(getSalesCategoriesMonth({
          year,
          month
        }))

      // dispatch sale cates year
        dispatch(getSalesCategoriesYear(year))

    },[])



    const [saleCatesMonth, setSaleCatesMonth] = useState([])
    const [saleCatesYear, setSaleCatesYear] = useState([])

    
    // set up category chart
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
    
      const cates_month = sale_cates_month?.categories

      const list_sales_month = new Array(listCates.length).fill(0)
      const list_sales_year = new Array(listCates.length).fill(0)

     
      if(listCates.length > 0 )
      {

        // sum sales month
        cates_month?.forEach(val => {
          const find_index = listCates.findIndex(el => val.cate.toLowerCase() === el.toLowerCase() )

          if(find_index > -1)
          {
            list_sales_month[find_index] = val.sales_cate
          }

        })
       
        // sum sales year
        sale_cates_year?.forEach(val => {
          const find_index = listCates.findIndex(el => val.cate.toLowerCase() === el.toLowerCase() )
          if(find_index > -1)
          {
            list_sales_year[find_index] = val.sales_cate
          }
        })
       

      }


     if(list_sales_month.length > 0 ) {
      setSaleCatesMonth(list_sales_month)
     } 

     if(list_sales_year.length > 0)
     {
      setSaleCatesYear(list_sales_year)
     }

    },[listCates])

    // console.log('listCate: ', listCates)

    // chart pie month
    const chart_pie_month_options ={
        series: saleCatesMonth,
        
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

          title: {
       
            align: 'center',
            style: {
              fontSize:  '18px',
              fontWeight:  'bold',
              color:  '#000'
            },
          },
          colors: ['#c00', '#d06', '#007', '#00f', '#2cc','#394','#cc0','#c70'],
          
    
        }
      }


    // chart pie year  
    const chart_pie_year_options ={
        series: saleCatesYear,
        
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
        <div className="chart-pie" style={{'width': '34%' }}>
            <div className="filter-chart-pie" 
              style={{
                  display: 'flex'
              }}>

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

                            border: '1px groove', 
                            borderTopLeftRadius: '5px',

                            borderBottomLeftRadius: '5px',
                            borderRight: '0',
                            transition: 'all 0.4s',
                            background: active === 1 ? 'white' : '#6dabe4',
                            color: active === 1 ? '' : 'white',
                           
                          }}
                  >Tháng</button>
                   
                </div>
                <div className="year">
                    <button onClick={handleClick} active={active === 1} id={1}
                              style={{
                        
                                padding: '7px 15px',
                                border: '1px groove', 
                                borderTopRightRadius: '5px',
                                borderBottomRightRadius: '5px',
                                borderLeft: 'transparent',
                                transition: 'all 0.4s',
                                background: active === 0 ? 'white' : '#6dabe4',
                                color: active === 0 ? '' : 'white'
                                
                              }}
                    >Năm</button>

                </div>
                </div>
                <div className="filter-option">
               
                      {
                        active === 0 ? 
                            <select name="" id="">
                              <option value="">Tháng {month}</option>
                            </select>
                        :
                            <select name="" id="">
                              <option value="">Năm {year}</option>
                            </select>
                      }
                        

                </div>

            </div>

              {
                active === 0 ?
                <>
                <Chart
              
                options={chart_pie_month_options.options}
                series={chart_pie_month_options.series}
                type='pie'
                width={380}
                />
                <div style={{
                    margin: '5px auto',
                    textAlign: 'center',
                    
                  }}>
                  <span style={{
                    fontSize: '13px',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    margin: 'auto',
                    fontWeight: 'bold'
                  }}>Biểu đồ thống kê doanh thu sản phẩm theo danh mục (tháng)</span>
                </div>
                </>
                
                  :
                  <>
                  
                  <Chart
                  options={chart_pie_year_options.options}
                  series={chart_pie_year_options.series}
                  type='pie'
                  width={380}
                  />
                  <div style={{
                    margin: '5px auto',
                    textAlign: 'center',
                    
                  }}>
                  <span style={{
                    fontSize: '13px',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    margin: 'auto',
                    fontWeight: 'bold'
                  }}>Biểu đồ thống kê doanh thu sản phẩm theo danh mục (năm)</span>
                </div>
                  </>
              }
           
        </div>
    )
}

export default ChartPie