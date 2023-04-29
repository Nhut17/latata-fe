import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { useDispatch } from 'react-redux';
import { selectSaleDate } from '../../../../../redux/Admin/adminSlice';
const ChartLine = () => {
    const [dateStart, setDateStart] = useState(new Date())
    const [dateEnd, setDateEnd] = useState()
    const dispatch = useDispatch()
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


    const chartOptions = {
        series: [
          {
            name: 'Khách hàng',
    
            data: [50, 69, 79, 54, 91, 88, 84,50, 69, 79, 54, 91]
          },
          {
            name: 'Sản phẩm',
            data: [77, 50, 42, 81, 82, 95, 48,50, 69, 79, 54, 91]
          }, {
            name: 'Tổng danh thu',
            data: [100, 50, 54, 99, 59, 63, 0.3,50, 69, 79, 54, 91]
    
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
    
            categories: ['Jan', 'Feb', 'Mar', 'Apr ', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
    
          },
          legend: {
            position: 'bottom'
      
          },
          grid: {
            show: false
          },
    
         
        }
      
      }

    return (

        
        <div className="chart-line" style={{'width': '65%'}}>
            <div className="filter-chart-line">
                <div className="filter-option">
                <select name="" id="">
                    <option value="">Năm</option>
                </select>
                <div className="filter-result">
                    <button onClick={handleOnClick}>Lọc kết quả</button>
                </div>
                </div>
            </div>

            <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type='line'
            height='500px'
            />
        </div>
        )
}

export default ChartLine