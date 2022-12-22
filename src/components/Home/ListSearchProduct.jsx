import React from 'react'
import { Link } from 'react-router-dom'

const ListSearchProduct = ({data}) => {
  return (
    <Link to={`/product/${data._id}`} reloadDocument>
    <div className='item-search-product' key={data._id}>
        <div className="flex">

      
        <div className="image"><img src={data?.images[0]?.url} alt="" /></div>

        <div className="content-item">
            <div className="a-center">
                <span className='name'>{data?.name}</span>
                <span className="priceDeal">{data?.priceDeal?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    <span className='currency'>&#8363;</span>
                </span>
                {
                    data.promotion > 0 &&
                    <span className="priceOld">{data?.price?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                        <span className='currency'>&#8363;</span></span>
                }
                
            </div>
        </div>

        </div>
    </div>
    </Link>
  )
}

export default ListSearchProduct
