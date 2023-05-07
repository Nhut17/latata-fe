import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectSaleDate } from '../../../../../redux/Admin/adminSlice';

const ChartPie = () => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(0);
    const handleClick = e => {
    const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };

    const [dateStart, setDateStart] = useState(new Date())
    const [dateEnd, setDateEnd] = useState()

    const Button = styled.button`
  
        display : inline-block;
        padding: 7px 15px;
        outline: none;
        cursor: pointer;
        position: relative;
        font-size: 1em;
        border: ${props => (props.active ? "1px solid #11698E" : "")};
        background-color: ${props => (props.active ? "#D8E3E7" : "white")};
        transition: background-color 0.5s ease-in-out;
            
        :hover {
            background-color: white;
        }
  `;

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
    return (
        <div className="chart-pie" style={{'width': '34%'}}>
            <div className="filter-chart-pie">

                <div className="btn-select flex">


                
                <div className="month" 
                
                >
                    <Button onClick={handleClick} active={active === 0} id={0}>Tháng</Button>
                </div>
                <div className="year"
                
                
                >
                    <Button onClick={handleClick} active={active === 1} id={1}>Năm</Button>

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
    )
}

export default ChartPie