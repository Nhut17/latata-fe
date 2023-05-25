import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPayment } from '../../redux/payment/paymentSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Payment = ({amount}) => {

  const { url_create } = useSelector(state => state.payment)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  console.log(url_create)

  // useEffect(() => {

  //   if(url_create.length > 0)
  //   {
  //     navigate(url_create)
  //     console.log(url_create)
  //   }

  // },[url_create])

  const handleCreatePayment = () => {
    const data = {
      amount,
      bankCode: 'NCB'
    }

    dispatch(createPayment(data))

  }

  return (
    <div>
        <div className="input-group">
          
        </div>
        <button type='button' onClick={handleCreatePayment}>Thanh toán VN Pay</button>

        <a href={url_create}>Link to bank</a>
    </div>
  )
}

export default Payment
