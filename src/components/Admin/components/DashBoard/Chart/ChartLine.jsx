import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import { getListYearSummary, getSummarySaleFigure, selectSaleDate } from '../../../../../redux/Admin/adminSlice';
const ChartLine = () => {

    const date = new Date()

    const [currentYear,setCurrentYear] = useState(date.getFullYear())
    const dispatch = useDispatch()

    const [listMonth, setListMonth] = useState([])
    const [users, setUsers] = useState([])
    const [products,setProducts] = useState([])
    const [sales,setSales] = useState([])

    const { sum_sales, list_year_sale } = useSelector(state => state.admin)

    useEffect(() => {

      dispatch(getListYearSummary())


    },[])

    useEffect(() => {

      dispatch(getSummarySaleFigure(currentYear))

    },[currentYear])


    useEffect(() => {
      const list_month = []
      const list_user = []
      const list_product = []
      const list_sales = []

      if(sum_sales)
      {
        sum_sales?.months?.forEach( el => {
            if(!list_month.includes(el))
            {
              list_month.push(el.month)
              list_product.push(el.quantity_product)
              list_user.push(el.users)

              const price = el.sales / 1000000
              list_sales.push(price.toFixed(2))
            }
        })
      }


      if(list_month.length > 0)
      {
        setListMonth(list_month)
        setUsers(list_user)
        setSales(list_sales)
        setProducts(list_product)
      }

    },[sum_sales])

  
    const chartOptions = {
        series: [
          {
            name: 'Khách hàng',
    
            data: users
          },
          {
            name: 'Sản phẩm',
            data: products
          }, {
            name: 'Tổng danh thu (Triệu VNĐ)',
            data: sales
    
          }
      
        ],
        options: {
          color: ['#6a04c', '#2980b9', '#DC3545'],
          chart: {
            background: 'transparent'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
    
            categories: listMonth
    
          },
          legend: {
            position: 'bottom'
      
          },
          grid: {
            show: false
          },
    
         
        }
      
      }


     const handleSelect = (e) => {

      setCurrentYear(e.target.value)

     } 


    return (

        
        <div className="chart-line" style={{'width': '65%'}}>
            <div className="filter-chart-line">
                <div className="filter-option">
                <select name="" id="" onChange={handleSelect} >
                    {
                      list_year_sale && list_year_sale.map(val => (

                        <option value={val} >{val}</option>
                      ))
                    }
                </select>
                {/* <div className="filter-result">
                    <button >Lọc kết quả</button>
                </div> */}
                </div>
            </div>

              {
                currentYear && <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type='line'
                height='500px'
                />
              }

            
        </div>
        )
}

export default ChartLine