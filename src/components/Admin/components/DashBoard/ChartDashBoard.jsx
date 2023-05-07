import React, {useCallback, useEffect, useState} from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { saleFigure, selectSaleDate } from "../../../../redux/Admin/adminSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrder } from "../../../../actions/OrderAction";
import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




export default function ChartDashBoard() {

        const dispatch = useDispatch()

        const [active, setActive] = useState('month');
        const { sale_figure, list_sale_date,sum_cates, sale_cates } = useSelector(state => state.admin)

        const { listCate } = useSelector(state => state.category)

        const [dateStart, setDateStart] = useState(new Date())
        const [dateEnd, setDateEnd] = useState()

        const [saleDate, setSaleDate] = useState([])
        const [listSale,setListSale] = useState([])
        const [listSell,setListSell] = useState([])

        const cates = []
        listCate.forEach(el => {

          cates.push(el.name)

        })


        // get sale figure from 7 days before
        const date_time = new Date()
        const seven_days = date_time.getTime() - 3600*1000*24*7

        const sale_seven_days = new Date(seven_days)

        // console.log('seven' + )

        const handleClick = (e) => {
          setActive('year');
          
      };

      console.log(listCate)

        const [startDate, setStartDate] = useState()

        // list_date()

        useEffect(() => {
            dispatch(saleFigure())
        },[])



        // handle sales figure
        useEffect(() => {
       

          sale_figure.forEach(el => {

        //       if(!saleDate.includes(date))
        //       {
        //         // setSaleDate(prev => [...saleDate].concat(date))
                
        //         // setListSale(prev => [...listSale].concat(sales))
        //         // setListSell(prev => [...listSell].concat(el.quantity))
        //         saleDate.push(date)
        //         listSale.push(sales)
        //         listSell.push(el.quantity)


        // }
      })
    }
      ,[sale_figure])





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
      labels: cates,
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

           

            
          </div>

          <div className="to-date">
            <p>Đến ngày : </p>
            <input type="date"
                    onChange={(e) => setDateEnd(e.target.value)}
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
    </>
  );
}
