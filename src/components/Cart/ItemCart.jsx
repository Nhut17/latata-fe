import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { decreaseQuantity, deleteCart, increaseQuantity } from '../../redux/Cart/cartSlice'

const ItemCart = ({data}) => {

    const dispatch = useDispatch()
    const [quantity,setQuantity] = useState(1)

    // increase quantity 
    const handleIncrease = () => {
        setQuantity(prev => prev + 1)
        dispatch(increaseQuantity(data.productId))
    }

    // decrease quantity
    const handleDecrease = () => {

        setQuantity(prev => prev - 1)
        dispatch(decreaseQuantity(data.productId))
    }

    // handle delete
    const handleDelete = () => {
        dispatch(deleteCart(data.productId))
    }



  return (
    
    <div className='item' key={data.productId}>
            <div className="img-sp">
                <img src={data.images[0].url} alt="" />
                <div className="delete">
                    <button onClick={handleDelete} ><i class="fa-solid fa-trash-can"></i> Xóa</button>
                </div>
            </div>
            <div className="content-product">
                <div className="name-and-price">
                    <p className="name">{data.name}</p>
                    <div>
                    <p className='price'>{data.priceDeal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        <span className='currency'>&#8363;</span>
                    </p>
                    <div className="price-old">
                    {
                         data.promotion > 0 ? (
                            <div className="">
                        <span className='initialPrice'>
                            {data.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span>
                        </span>
                  </div>
                ) : ('')
              }
                    </div>
                    </div>
                </div>
                <div className="promotion">
                    4 khuyến mãi
                </div>

                <div className="product-quantity-and-color">

                <p className="color-product">Màu: Đen</p>

                    <div className="select-quantity">
                        <button className='decrease'
                                onClick={handleDecrease} ><i class="fa-solid fa-minus"></i></button>
                        <input type="number" value={data.quantity}
                                disabled={true} />
                        <button className='increase'
                                onClick={handleIncrease} ><i class="fa-solid fa-plus"></i></button>
                    </div>

                </div>
            </div>

    </div>  
    
    
    
  )
}

export default ItemCart
