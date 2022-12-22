import React from 'react'
import ItemCart from './ItemCart'
import { list_product } from '../data'

const ListingCart = ({listCart}) => {
  return (
    <div className='listing-cart'>
        {
            listCart.products.map(data => (
                <ItemCart data={data} />
            ))
        }
   
      
      <div className="total-price">
        <span>Tạm tính ({listCart.products.length} sản phẩm): </span>
        <span className="total">{listCart.totalPrice.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span>
                        </span>
      </div>
    

    </div>
  )
}

export default ListingCart
