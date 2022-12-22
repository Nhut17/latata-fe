import React, { useRef } from 'react'
import ListProduct from '../ListProduct'
import banner_trend_1 from '../../assets/images/home/banner_trend_1.png'
import banner_trend_2 from '../../assets/images/home/banner_trend_2.png'
import { HashScroll } from 'react-hash-scroll'


const ShoppingTrends = ({shoppingTrendsRef}) => {



  return (

      <div className='shopping-trends' id='shoppingtrends' ref={shoppingTrendsRef}>
              <div className="banner flex j-between">
                  <img src={banner_trend_1} alt="" />
                  <img src={banner_trend_2} alt="" />

              </div>
              <h3>Xu hướng mua sắm</h3>
              
              <ListProduct quantity={10} />
          </div>

  
  )
}

export default ShoppingTrends
