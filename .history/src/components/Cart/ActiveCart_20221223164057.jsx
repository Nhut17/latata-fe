import React from 'react'
import '../../sass/cart/checkoutCart.scss'
import ListingCart from './ListingCart'
import { Link } from 'react-router-dom'
import InfoCustomer from './InfoCustomer'
import Voucher from './Voucher'
import FinalTotal from './FinalTotal'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAddress } from '../../redux/address/addressSlice'

const ActiveCart = ({listCartUser}) => {

  const dispatch= useDispatch()

  useEffect(() => {
      dispatch(getAddress())
  },[])


  return (
    <div className='container container-cart'>
        <div className="title">
            <Link to='/' className="buy-another">Mua thêm sản phẩm khác</Link>
            <span >Giỏ hàng của bạn</span>
        </div>

        <div className='info-cart'>
            <ListingCart listCart={listCartUser}  />
            <InfoCustomer totalPrice={listCartUser.totalPrice} />
        </div>
    </div>
  )
}

export default ActiveCart
