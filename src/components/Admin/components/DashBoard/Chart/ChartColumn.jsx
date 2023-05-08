import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Chart from "react-apexcharts";
import { selectSaleDate } from '../../../../../redux/Admin/adminSlice';
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  
const ChartColumn = () => {

    const [dateStart, setDateStart] = useState(new Date())
    const [dateEnd, setDateEnd] = useState()
    const dispatch = useDispatch()

    const [saleDate, setSaleDate] = useState([])
    const [listSale,setListSale] = useState([])
    const [listSell,setListSell] = useState([])

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

    const chart_column_options = {
        series: [
          {
            name: 'Sản phẩm',
    
            data: [...listSell]
          },
          {
            name: 'Doanh thu (Triệu VND)',
            data: [...listSale]
          },
      
        ],
        options: {
          color: ['#2980b9', '#DC3545'],
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
            categories: [...saleDate]
          },
    
    
          yaxis:{
          //   title: {
          //     text:'triệu VNĐ',
          //     rotate: -90,
          //     offsetX: 0,
          //     offsetY: 0,
          //     style: {
          //         color: undefined,
          //         fontSize: '15px',
          //         fontFamily: 'Helvetica, Arial, sans-serif',
          //         fontWeight: 600,
          //         cssClass: 'apexcharts-yaxis-title',
          //     }
          // },
        },
          legend: {
            position: 'bottom'
      
          },
          grid: {
            show: false
          }
        }
      
      }
    return (
        <div className="chart-column">

            <div className="filter-chart-column flex">
            <div className="from-date">
                <p>Từ ngày : </p>
                {/* <input type="date"
                        onChange={(e) => setDateStart(e.target.value)}

                        />  */}

                <DatePicker
                selected={dateStart}
                onChange={(date) => {
                    setDateStart(date);
                }}
                dateFormat='dd-MM-yyyy'
                placeholderText='Ng'
                locale='vi'
                maxDate={dateStart}
                value={dateStart}

                        />

            </div>

            <div className="to-date">
                <p>Đến ngày : </p>
                {/* <input type="date"
                        onChange={(e) => setDateEnd(e.target.value)}
                        /> */}
                <DatePicker
                
                
                dateFormat='dd-MM-yyyy'
                placeholderText=''
                locale='vi'
                maxDate={dateStart}
                value={dateStart}
                
            />
            </div>

            <div className="filter-option">
                <p>Lọc theo : </p>   
                <select name="" id="">
                <option value=""></option>
                </select>
            </div>


            
            </div>
            <div className="filter-result">
                <button onClick={handleOnClick}>Lọc kết quả</button>
            </div>
            <Chart
            options={chart_column_options.options}
            series={chart_column_options.series}
            type='bar'
            height='500px'
            />
        </div>
    )
}

export default ChartColumn