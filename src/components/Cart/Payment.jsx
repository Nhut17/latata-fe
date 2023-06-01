import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPayment } from '../../redux/payment/paymentSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/api'


const Payment = ({amount}) => {

  const { url_create } = useSelector(state => state.payment)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  console.log('url_create: ' +url_create)

  // useEffect(() => {

  //   if(url_create.length > 0)
  //   {
  //     navigate(url_create)
  //     console.log(url_create)
  //   }

  // },[url_create])

  const handleCreatePayment = async  () => {

    const money = parseInt(amount)
   
    
    await window.open(`
          http://localhost:4000/api/v1/create-payment/${money}
    `)
    
    window.location.reload(0);
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
