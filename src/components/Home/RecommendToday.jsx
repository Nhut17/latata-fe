import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ListProduct from '../ListProduct'
import icon from '../../assets/images/flash-sale.png'
import { HashScroll } from "react-hash-scroll";
import clx from 'classnames'

const RecommendToday = () => {

  const {listProduct} = useSelector(state => state.product)
  
  // const [topDeal,setTopDeal] = useState(listProduct.slice().sort((a,b) =>  b.promotion - a.promotion))

  const topDeal = listProduct.slice().sort((a,b) =>  b.promotion - a.promotion)
  const [activeTopDeal, setActiveTopDeal] = useState(false)

  // scroll
  useEffect(() => {

      console.log(window.scrollY)

      const scroll = () => {
        if(window.scrollY >= 150 )
        {
          setActiveTopDeal(true)
        }
        else{
          setActiveTopDeal(false)
        }
      }

      document.addEventListener('scroll', scroll)

      return () => {
      document.removeEventListener('scroll', scroll)
      }

  },[])

  return (
   
        <div className='recommend-today' id='topdeal'>
        <div className={`title ${clx({
          'active-top-deal': activeTopDeal
        })}`}
         >
        

            <h3 >TOP DEAL <i class="fa-solid fa-bolt fa-fade"></i></h3> 
          
   
         
        </div>
          
          <ListProduct quantity={10}
                      list_product={topDeal}  />
      </div>
  
    
  )
}

export default RecommendToday
