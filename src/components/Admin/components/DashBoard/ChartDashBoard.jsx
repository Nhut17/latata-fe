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
        data: [50, 69, 79, 54, 91, 88, 84, 41, 43, 45, 78, 57]
      },
      {
        name: 'Sản phẩm',
        data: [77, 50, 42, 81, 82, 95, 48, 70, 99, 84, 96, 82]
      }, {
        name: 'Tổng danh thu',
        data: [57, 50, 54, 99, 59, 63, 51, 89, 86, 82, 86, 46]
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr ', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oc', 'Nov', 'Dec']
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
    <div className="dashboard-middle-chart">

      <div className="filter-chart flex">
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
        type='line'
        height='500px'
      />
    </div>
  );
}
