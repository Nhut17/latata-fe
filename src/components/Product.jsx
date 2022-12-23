import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

import StarRating from './StarRating';

const Product = ({data}) =>{

  const [priceDeal,setPriceDeal] = useState(data.price - data.price*(data.promotion/100))
  
  // const [isStock,setIsStock] = useState(data.stock)

    return (

     <Link to={`/product/${data._id}`} reloadDocument>
        <div className="item-product" key={data._id}>

        <div className="image">

          {
            data?.images?.slice(0,1).map(val => (
              <img src={val.url} alt="" />
            ))
          }
           

          

        </div>

        <div className="name-product">
          <p>{data?.name}</p>
        </div>

        <div className="price-old">
        {
                data?.promotion > 0 ? (
                  <div className="">
                        <span className='initialPrice'>
                  {data?.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                </span>
                  <span className='discount' >-{data?.promotion}%</span>
                  </div>
                ) : ('')
              }
        </div>

        <p className='priceDeal'>{priceDeal?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              <span className='currency'>&#8363;</span>
            </p>

        <StarRating rating={data?.ratings} />
            {
              data?.sold >=1 && 
              <span style={{
                paddingLeft: 5,
                fontSize: '14px'
              }}>{`(${data.sold})`}</span>
            }
          {
            data.stock === 0 && 
            <p style={{
              paddingTop: '10px',
              color: 'red'
            }}>Đã hết hàng</p>
          }
        </div>
     </Link>
        
    )
}

export default Product