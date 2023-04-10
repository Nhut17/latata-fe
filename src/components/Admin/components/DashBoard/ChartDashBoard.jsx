import React, {useEffect} from "react";
import Chart from "react-apexcharts";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrder } from "../../../../actions/OrderAction";


export default function ChartDashBoard() {
  // const dispatch = useDispatch()
  // const allOrder = useSelector(state => state.allOrder.order)

  // const numberOfOrdersOnMonth = (month) => {
  //   if(allOrder){
  //     return allOrder.filter((order) => {
  //       const allOrder = new Date(order.createdAt).getMonth();
  //       if (allOrder + 1 === month) {
  //         return order;
  //       }
  //     }).length;
  //   }
  //   return
  // };

  // useEffect(() => {
  //   dispatch(getAllOrder())
  // }, [dispatch])

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
            <input type="date" />
          </div>

          <div className="to-date">
            <p>Đến ngày : </p>
            <input type="date" />
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
          options={chartOptions.options}
          series={chartOptions.series}
          type='bar'
          height='500px'
        />
      </div>
    </>
  );
}
