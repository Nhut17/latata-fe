import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch,useSelector } from 'react-redux'
import { createOrder } from '../../redux/Order/orderSlice'
import ModalListAddress from './ModalListAddress'
import { ShakeOutlined } from "@ant-design/icons";
import InfoVoucher from './InfoVoucher'
import Payment from './Payment'
import { getVouchers } from '../../redux/Admin/adminSlice'
import { userVoucher } from '../../redux/Cart/cartSlice'


const InfoCustomer = ({totalPrice}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
     } = useForm()

    const dispatch = useDispatch()

    const {vouchers} = useSelector(state => state.admin)
    const { listAddress , addressCurrent} = useSelector(state => state.address)
    const { url_create } = useSelector(state => state.payment)

   
    const [nameI,setName] = useState(addressCurrent ? addressCurrent[0]?.name : '')
    const [phoneI,setPhone] = useState(addressCurrent ? addressCurrent[0]?.phone : '')
    const [selectedNameVoucher,setSelectedNameVoucher] = useState('')


  

        useEffect(() => {

            setPhone(addressCurrent ? addressCurrent[0]?.phone : '')
            setName(addressCurrent ? addressCurrent[0]?.name : '')

        },[addressCurrent])


  const handleClickOrderDetail = () => {
    setShowOrderDetail(true)
  }

  const [showOrderDetail, setShowOrderDetail] = useState(false)



  // create order
  const handleCreateOrder = (formData) =>{
    const data = {
        ...formData,
        name: nameI,
        phoneNo: phoneI,
        address: addressCurrent[0]?.address,
        totalPrice: total
    }
        dispatch(createOrder(data))
    if(selectedNameVoucher)
    {
        dispatch(userVoucher({
            voucher: selectedNameVoucher
        }))
    }
  }

  useEffect (()=> {
    dispatch(getVouchers)
  })
 

  const [getSaleVoucher, setGetSaleVoucher]= useState()

   
//   let privisional = getSaleVoucher/100*totalPrice
  

  let privisional = 0
  
  let total = 0

  if(getSaleVoucher){
        privisional = getSaleVoucher/100*totalPrice
        total = totalPrice - privisional 

  }else{
         total = totalPrice

  }

  return (
    <>
        <div className='info-customer'>

            <p>THÔNG TIN KHÁCH HÀNG</p>

            <form onSubmit={handleSubmit(handleCreateOrder)}>

            <div className="name-and-number">
            <div className="name input">
                <input 
                    type="text" 
                    defaultValue={nameI}

                    {...register('name',{
                        required: nameI.length > 0 ? false : true,
                        onChange: e => setName(e.target.value)
                     
                    })}
                    />

                {
                    (nameI.length === 0 &&errors.name?.type === 'required') ?
                    <span className='err-msg'>Mời bạn nhập họ tên</span> : ''
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
                        required: phoneI.length > 0 ? false : true,
                        pattern: {
                            message: 'Số điện thoại không phù hợp',
                            value: /^\d+$/,
                            
                        },
                        onChange: e => setPhone(e.target.value)
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
                        (phoneI.length === 0 && errors.phoneNo?.type === 'required') ?
                        <span className='err-msg'>Mời bạn nhập Số điện thoại</span> : ''
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

           <InfoVoucher setGetSaleVoucher={setGetSaleVoucher}
                        selectedNameVoucher={setSelectedNameVoucher} />


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
            <div className="privisional flex j-between" style={{marginBottom: '10px'}}>
                <span>Tạm tính: </span>
                <span className="price">{totalPrice.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span>
            </div>

           
           
                <div className="sales flex j-between">
                <span>Giảm giá: </span>
                <span className="price">- {privisional.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span>
            </div>
            

               
            
           
            <div className='final-total'>
            <div className="total">
            <span className="tt-price">Tổng tiền:</span>
            <span className="price">{total.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span>
            </div>


            {/* <Payment /> */}


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