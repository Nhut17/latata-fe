import React from 'react'
import Product from './Product'

const ListProduct = ({list_product,quantity}) => {
  return (
    <div className="list-product">
      {
        list_product && list_product?.slice(0,quantity).map(val => (
          <Product data={val} />
        ))
      }
    </div>
  )
}

export default ListProduct
