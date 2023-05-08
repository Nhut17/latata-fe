import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Chart from "react-apexcharts";
import { selectSaleDate } from '../../../../../redux/Admin/adminSlice';
import DatePicker from 'react-date-picker';
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


      // state admin chart column
      const { list_sale_date } = useSelector(state => state.admin)
      console.log('list_sale_date', list_sale_date)

     // handle select  7 days  
      useEffect(() => {

        // chart seven days ago
        const date = new Date()
        const seven_days = new Date(date.getTime() - 7*3600*1000*24)

        // the previous day
        const previous_day = new Date(date.getTime() - 3600*24*1000)
       

        const data = {
          // date_start : seven_days.toLocaleDateString('en-US'),
          // date_end: previous_day.toLocaleDateString('en-US')
          date_start : '3/30/2023',
          date_end: '5/5/2023'
        }

        console.log(data)

        dispatch(selectSaleDate(data))

      },[])


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
                <input type="date"
                        onChange={(e) => setDateStart(e.target.value)}

                        /> 

               
            </div>

            <div className="to-date">
                <p>Đến ngày : </p>
                <input type="date"
                        onChange={(e) => setDateEnd(e.target.value)}
                        />
                {/* <DatePicker
                
                
                dateFormat='dd-MM-yyyy'
                placeholderText=''
                locale='vi'
                maxDate={''}
                value={''}
                
            /> */}
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