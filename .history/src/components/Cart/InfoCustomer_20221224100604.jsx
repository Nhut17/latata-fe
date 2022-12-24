import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch,useSelector } from 'react-redux'
import { createOrder } from '../../redux/Order/orderSlice'
import ModalListAddress from './ModalListAddress'


const InfoCustomer = ({totalPrice}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
     } = useForm()

    const dispatch = useDispatch()

    const { listAddress , addressCurrent} = useSelector(state => state.address)

   
        const [nameI,setName] = useState(addressCurrent ? addressCurrent[0]?.name : '')
        const [phoneI,setPhone] = useState(addressCurrent ? addressCurrent[0]?.phone : '')

        useEffect(() => {

            setPhone()

        },[addressCurrent])


  const handleClickOrderDetail = () => {
    setShowOrderDetail(true)
  }

  const [showOrderDetail, setShowOrderDetail] = useState(false)

  // create order
  const handleCreateOrder = (formData) =>{
    const data = {
        ...formData,
        address: addressCurrent[0]?.address
    }
        console.log(data)
        dispatch(createOrder(data))
  }
 



  return (
    <>
        <div className='info-customer'>

            <p>THÔNG TIN KHÁCH HÀNG</p>

            <form onSubmit={handleSubmit(handleCreateOrder)}>

            <div className="name-and-number">
            <div className="name input"  >
                <input 
                    type="text" 
                    defaultValue={nameI}
            
                    {...register('name',{
                        required: true,
                       
                    })}
                    />

                {
                    errors.name?.type === 'required' &&
                    <span className='err-msg'>Mời bạn nhập họ tên</span> 
                }

                
                <span className='style-change' htmlFor='name' style={ {
                                                            transform: 'translate(15px,-15px)',
                                                        fontSize: 14,
                                                        backgroundColor:'white',
                                                        padding: '0 3px' }}>Họ và Tên</span>
            </div>
            <div className="number input">
                <input 
                    type="text"  
                    defaultValue={phoneI}
                    {...register('phoneNo',{
                        required: true,
                       
                        pattern: {
                            message: 'Số điện thoại không phù hợp',
                            value: /^\d+$/,
                            
                        }
                    })}
                    />
                    <span className='style-change' htmlFor='number' 
                    style={{
                        transform: 'translate(15px,-15px)',
                        fontSize: 14,
                        backgroundColor:'white',
                        padding: '0 3px'
                    }}>Số điện thoại</span>

                    {
                        errors.phoneNo?.type === 'required' &&
                        <span className='err-msg'>Mời bạn nhập Số điện thoại</span> 
                    }
                    {
                        errors.phoneNo?.type === 'pattern' &&
                        <span className='err-msg'>{errors.phoneNo.message}</span> 
                    }
            
            </div>
            </div>

            <div className='address'>
                <p style={{
                           fontWeight: 'bold' }}>Địa chỉ:</p>
                    <br />
                
                    <div className="address-detail" >
                       {addressCurrent ? addressCurrent[0]?.address : 'Mời bạn thêm địa chỉ'}
                    </div>
                    <br />
                    <u className='change' onClick={handleClickOrderDetail}>Thay đổi</u>

            </div>


            <div className="note">
            <p>Yêu cầu khác</p>
            <textarea name="" id="" cols="30" rows="3"
                    {...register('note')}  ></textarea>
            </div>

            {/* <div className='voucher'>
            <i class="fa-solid fa-tag ic"></i>
            <div className="input">
            <input type="text" placeholder='Sử dụng mã giảm giá' />
            </div>

            </div> */}


            <div className='final-total'>
            <div className="total">
            <span className="tt-price">Tổng tiền:</span>
            <span className="price">{totalPrice.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span>
            </div>

            <button className='order' type='submit'>ĐẶT HÀNG</button>

            </div>

            </form>
        </div>

        {

            showOrderDetail && 
            <ModalListAddress  showAddress={showOrderDetail} 
                                setShowAddress={setShowOrderDetail} 
                                listAddress={listAddress}
             />
 
        }
    </>



  )
}


export default InfoCustomer
