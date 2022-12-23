import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ListProduct from '../ListProduct'
import icon from '../../assets/images/flash-sale.png'
import { HashScroll } from "react-hash-scroll";

const RecommendToday = () => {

  const {listProduct} = useSelector(state => state.product)
  
  // const [topDeal,setTopDeal] = useState(listProduct.slice().sort((a,b) =>  b.promotion - a.promotion))

  const topDeal = listProduct.slice().sort((a,b) =>  b.promotion - a.promotion)

  // console.log(topDeal)

  // const listDeal = topDeal.filter(val => val.promotion >= 1)

  return (
   
        <div className='recommend-today' id='topdeal'>
        <div className="title">
        <div className="img" style={{marginRight : '10px'}}>
            <img src='https://res.cloudinary.com/dx8xengfd/image/upload/v1671612207/depositphotos_36001719-stock-illustration-recommended-stamp-removebg-preview_djojny.png' alt="" />
          </div>
          <h3 style={{color : '#5856d6'}}>TOP DEAL</h3> 
          
          {/* <div className="img">
            <img src={icon} alt="" />
          </div> */}
        </div>
          
          <ListProduct quantity={10}
                      list_product={topDeal}  />
      </div>
  
    
  )
}

export default RecommendToday
