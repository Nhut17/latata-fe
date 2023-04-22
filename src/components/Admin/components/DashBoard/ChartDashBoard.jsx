import React, {useCallback, useEffect, useState} from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { saleFigure, selectSaleDate } from "../../../../redux/Admin/adminSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrder } from "../../../../actions/OrderAction";
import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import vi from 'date-fns/locale/vi'

export default function ChartDashBoard() {

        const dispatch = useDispatch()

        const [active, setActive] = useState('month');
        const { sale_figure, list_sale_date } = useSelector(state => state.admin)

        const [dateStart, setDateStart] = useState(new Date())
        const [dateEnd, setDateEnd] = useState()

        // console.log('start: ', dateStart.toLocaleDateString())

        // const date_start = new Date(dateStart?.timeStamp)

      
      // console.log('date end: ', dateEnd.split('-').reverse().join('/'))

        const [saleDate, setSaleDate] = useState([])
        const [listSale,setListSale] = useState([])
        const [listSell,setListSell] = useState([])



        const handleClick = (e) => {
          setActive('year');
          
          
      };

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


  const chart_pie_options ={
    series: [44, 55, 13, 43, 22,44, 55, 13],
    
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Điện thoại', 'Laptop', 'Tablet', 'Smartwatch', 'Đồng hồ','Tivi','Nhà thông minh', 'Phụ kiện'],
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
       
      
      },
      colors: ['#c00', '#d06', '#007', '#00f', '#2cc','#394','#cc0','#c70'],
      

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
    <>
    <div className="dashboard-middle-chart flex j-between">

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

      <div className="chart-pie" style={{'width': '34%'}}>
        <div className="filter-chart-pie">

            <div className="btn-select flex">


              
              <div className="month" 
              
                  
              >
                <button>Tháng</button>
              </div>
              <div className="year"
              
            
              >
                <button>Năm</button>

              </div>
            </div>
            <div className="filter-option">
      
              <div className="filter-result">
                <button onClick={handleOnClick}>Lọc kết quả</button>
              </div>
            </div>
        </div>

        <Chart
          options={chart_pie_options.options}
          series={chart_pie_options.series}
          type='pie'
          width={380}
        />
      </div>

          
      </div>

      <div className="chart-column">

        <div className="filter-chart-column flex">
          <div className="from-date">
            <p>Từ ngày : </p>
            <input type="date"
                    onChange={(e) => setDateStart(e.target.value)}

                     /> 

            {/* <DatePicker
              selected={dateStart}
              onChange={(date) => {
                setDateStart(date);
              }}
              dateFormat='dd-MM-yyyy'
              placeholderText=''
              locale='vi'
              maxDate={dateStart}
              value={dateStart}

                     /> */}

            {/* <DatePicker
                  selected={dateStart}
                  onChange={setDateStart}
                  dateFormat='dd-MM-yyyy'
                  placeholderText=''
                  locale='vi'
                  maxDate={new Date()}
                  value={dateStart}
>>>>>>> f684236f1fa8a4fed0464e8777e048833534f671
              
          /> */}
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
    </>
  );
}
