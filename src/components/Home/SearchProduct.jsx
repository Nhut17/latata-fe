import React from 'react'
import ListSearchProduct from './ListSearchProduct'
import '../../sass/header/header.scss'

const SearchProduct = ({listProduct}) => {
  return (

    
    <div className='search-product' style={
      listProduct.length >= 10 ? {
          height: 780,
          overflowY: 'scroll'
      } : {}
  }>
      {
          listProduct.map(data => (

               <ListSearchProduct data={data} /> 
          ))
      }
    
  </div>

  )
}

export default SearchProduct
