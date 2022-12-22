import React, { useEffect } from 'react'
import emptycart from '../../assets/images/emptycart.png';
import '../../sass/cart/empty-cart.scss'
import { Link } from 'react-router-dom';
const EmptyCart = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }, [])

  return (
    <div className='empty-cart flex a-center j-center bd-bottom'>
      <img src={emptycart} alt="" />
      <p>Không có sản phẩm nào trong giỏ hàng</p>
      <Link to='/' reloadDocument>
        <button>VỀ TRANG CHỦ</button>
      </Link>
    </div>
  )
}

export default EmptyCart
