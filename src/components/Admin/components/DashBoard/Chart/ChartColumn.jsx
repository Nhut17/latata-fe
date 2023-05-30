import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Chart from "react-apexcharts";
import { messageErrorPickDateChartCol, selectSaleDate } from '../../../../../redux/Admin/adminSlice';

import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  

const ChartColumn = () => {

    const [dateStart, setDateStart] = useState(new Date())
    const [dateEnd, setDateEnd] = useState(new Date())
    const [maxDate,setMaxDate] = useState()

    const dispatch = useDispatch()

    const [listDate, setListDate] = useState([])
    const [listSale,setListSale] = useState([])
    const [listSell,setListSell] = useState([])

    // hanlde  select date
    const handleOnClick = () => {

         // check select date start to end not overdue 7days ago
         const condi_7days_ago = new Date(dateEnd.getTime() - 7*24*3600*1000) 
         
        // check date end is not valid
        if(dateEnd < dateStart && dateEnd.getDay() !== dateStart.getDay())
        {
          dispatch(messageErrorPickDateChartCol('Lỗi chọn ngày kết thúc. Xin mời chọn lại!'))
          return 
        }

       
        // check select date not overdue 7days
         if( dateStart >= condi_7days_ago && (dateStart.getTime() - condi_7days_ago.getTime() > 0) ) 
         {
           dispatch(messageErrorPickDateChartCol(''))
          

           const data = {
              date_start: dateStart.toLocaleDateString('en-US'),
              date_end: dateEnd.toLocaleDateString('en-US')
           }
          
           dispatch(selectSaleDate(data))

         }
         else{
          dispatch(messageErrorPickDateChartCol('Không chọn quá 7 ngày. Tính từ ngày bắt đầu đến ngày kết thúc'))
         }


      }


      // state admin chart column
      const { list_sale_date,errorChartCol } = useSelector(state => state.admin)
      // console.log('list_sale_date', list_sale_date)

   



     // handle select  7 days  
      useEffect(() => {

        // chart seven days ago
        const date = new Date()
        const seven_days = new Date(date.getTime() - 7*3600*1000*24)
        setDateStart(seven_days)
     

        // the previous day
        const previous_day = new Date(date.getTime() - 3600*24*1000)
        setDateEnd(previous_day)

        const data = {
          // date_start : seven_days.toLocaleDateString('en-US'),
          // date_end: previous_day.toLocaleDateString('en-US')
          date_start : '4/24/2023',
          date_end: '5/5/2023'
        }

        
        dispatch(selectSaleDate(data))

      },[])


      // handle setting chart sale columns
      useEffect(() => {

          const list_date = []
          const list_sale = []

          if(list_sale_date)
          {

            list_sale_date.forEach(date => {
                if(!list_date.includes(date.order_date))
                {
                  // format date
                  const format_date = new Date(date.order_date)
                  list_date.push(format_date.toLocaleDateString('en-GB'))

                  // calculate sales
                  const sale = date.sales / 1_000_000
                  list_sale.push(sale.toFixed(2))
                }
            })

          }

          if(list_date.length > 0 )
          {
              setListDate(list_date)
              setListSale(list_sale)
          }

      },[list_sale_date])


      // setting chart column
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
            categories: listDate
          },

          title: {
            text: 'Biểu đồ XXX',
            align: 'center',
            style: {
              fontSize:  '18px',
              fontWeight:  'bold',
              color:  '#000'
            },
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
               


                 <DatePicker
                selected={dateStart}
                onChange={(date) => {
                    setDateStart(date);
                }}
                dateFormat='dd-MM-yyyy'
                placeholderText='Ngày bắt đầu'
                locale='vi'
                maxDate={new Date()}
                value={dateStart}
                


                />
                        


            </div>

            <div className="to-date">
                <p>Đến ngày : </p>
              
                <DatePicker
                selected={dateEnd}
                onChange={setDateEnd}
                dateFormat='dd-MM-yyyy'
                placeholderText=''
                locale='vi'
                maxDate={new Date()}
                value={dateEnd}
                
            />
            </div>

            {/* <div className="filter-option">
                <p>Lọc theo : </p>   
                <select name="" id="">
                <option value=""></option>
                </select>
            </div> */}


            
            </div>
            <div className="filter-result">
                <button onClick={handleOnClick}>Lọc kết quả</button>
            </div>

            <div style={{
              margin: '10px 0'
            }}>
              <span style={{
                color:'red',
                fontSize: '13px'
              }}>{errorChartCol}</span>
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