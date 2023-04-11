import React, {useCallback, useEffect, useState} from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { saleFigure } from "../../../../redux/Admin/adminSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrder } from "../../../../actions/OrderAction";


export default function ChartDashBoard() {

        const dispatch = useDispatch()
        const { sale_figure } = useSelector(state => state.admin)

        const [dateStart, setDateStart] = useState()
        const [dateEnd, setDateEnd] = useState()

        // const date_start = new Date(dateStart?.timeStamp)

      // console.log('date start: ', dateStart.split('-').reverse().join('/'))
      // console.log('date end: ', dateEnd.split('-').reverse().join('/'))

        const [saleDate, setSaleDate] = useState([])
        const [listSale,setListSale] = useState([])
        const [listSell,setListSell] = useState([])

        // const list_date = useCallback(() => {

        //   sale_figure.forEach(element => {


            

        //     const date = element.order_date?.split('/').slice(0,2).reverse().join('/')
            
            


        //     saleDate.push(date)

        //     console.log(date)
        //     console.log(saleDate)
        // });

        // },[sale_figure])

        // list_date()
       
        useEffect(() => {
            dispatch(saleFigure())
        },[])


        useEffect(() => {
          sale_figure.forEach(el => {

              const date = el.order_date.split('/').splice(0,2).reverse().join('/')
              const sales = el.sales / 1000000

              if(!saleDate.includes(date))
              {
                saleDate.push(date)
                listSale.push(sales)
                listSell.push(el.quantity)
              }


              

              


          });


        },[sale_figure])


        console.log(saleDate)
        console.log(listSale)
        console.log(listSell)



  const chart_column_options = {
    series: [
      {
        name: 'Sản phẩm',

        data: [...listSell]
      },
      {
        name: 'Doanh thu',
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
      legend: {
        position: 'bottom'
  
      },
      grid: {
        show: false
      }
    }
  
  }


  const chartOptions = {
    series: [
      {
        name: 'Khách hàng',

        data: [50, 69, 79, 54, 91, 88, 84]
      },
      {
        name: 'Sản phẩm',
        data: [77, 50, 42, 81, 82, 95, 48]
      }, {
        name: 'Tổng danh thu',
        data: [100, 50, 54, 99, 59, 63, 0.3]

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

        categories: ['Jan', 'Feb', 'Mar', 'Apr ', 'May', 'Jun', 'Jul']

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
    <>
    <div className="dashboard-middle-chart">

      <div className="filter-chart-line">
          <div className="filter-option">
            <p>Lọc theo : </p>   
            <select name="" id="">
              <option value="">2023</option>
            </select>
          </div>
      </div>

      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type='line'
        height='500px'
      />


          
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
                    onChange={(e) => setDateEnd(e.target.value)} />
          </div>

          <div className="filter-option">
            <p>Lọc theo : </p>   
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>


          
        </div>
        <div className="filter-result">
            <button>Lọc kết quả</button>
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
