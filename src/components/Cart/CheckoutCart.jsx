import React from 'react'
import '../../sass/cart/checkoutCart.scss'
import { Link, useNavigate } from 'react-router-dom'
import InfoCustomer from './InfoCustomer'
import FinalTotal from './FinalTotal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ActiveCart from './ActiveCart'
import EmptyCart from './EmptyCart'
import { getCartUser } from '../../redux/Cart/cartSlice'

import { getAddress } from '../../redux/address/addressSlice'

const CheckoutCart = () => {  

  const { listCartUser } = useSelector(state => state.cart)
  
  

  return (
    <React.Fragment>

      {
        listCartUser?.products &&
        listCartUser?.products.length > 0 ? <ActiveCart listCartUser={listCartUser} /> : <EmptyCart />
      }
        
        
    </React.Fragment>
  )
}

export default CheckoutCart
