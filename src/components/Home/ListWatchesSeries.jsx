import React from 'react'
import banner from '../../assets/images/home/banner_watch_series.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../../redux/Product/productSlice'
import ListProduct from '../ListProduct'
import { HashScroll } from 'react-hash-scroll'

const ListWatchesSeries = () => {

    const listProduct = useSelector(state => state.product.listProduct)
    const listWatch = listProduct.filter(item => item.category === 'Smartwatch')
  return (


        <div className='list-watches' id='salewatch'>
                <div className="banner">
                    <Link to=''>
                        <img src={banner} alt="" />
                    </Link>
                </div>

                <div className="list-product-watches">
                    
                    <ListProduct list_product={listWatch} quantity={6} />
                    
                </div>

            </div>
   
  )
}

export default ListWatchesSeries
