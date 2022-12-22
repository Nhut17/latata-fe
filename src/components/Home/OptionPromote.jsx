import React, {useRef} from 'react'
import { list_icon_opt_home } from '../data'
import { Link, NavLink } from 'react-router-dom'
import { HashScroll } from "react-hash-scroll";
import iconOpt_1 from '../../assets/images/home/iconOpt_sales.png'
import iconOpt_2 from '../../assets/images/home/iconOpt_deal.png'
import iconOpt_3 from '../../assets/images/home/iconOpt_watchSale.png'
import iconOpt_4 from '../../assets/images/home/iconOpt_news.png'

const OptionPromote = () => {

//shoppingtrends
  return (
    <div className="option-promote">
        
            
                <div  className="item"  onClick={() => document.getElementById("shoppingtrends").scrollIntoView({behavior : 'smooth'})} >
                    <img src={iconOpt_1} alt="" />
                    <span>Giảm online</span>
                </div>

                <div className="item" onClick={() => document.getElementById("topdeal").scrollIntoView({behavior : 'smooth'})}>
                    <img src={iconOpt_2} alt="" />
                    <span>Top Deal</span>
                </div>
           
                <div className="item" onClick={() => document.getElementById("salewatch").scrollIntoView({behavior : 'smooth'})}>
                    <img src={iconOpt_3} alt="" />
                    <span>Bão sale đồng hồ</span>
                </div>
                
                <div className="item" onClick={() => document.getElementById("tech24hs").scrollIntoView({behavior : 'smooth'})}>
                    <img src={iconOpt_4} alt="" />
                    <span>24h Công nghệ</span>
                </div>
    </div>
  )
}

export default OptionPromote
