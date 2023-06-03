import { ShakeOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import VoucherItem from './VoucherItem'
import { useDispatch, useSelector } from 'react-redux'
import { getVouchers } from '../../redux/Admin/adminSlice'

const InfoVoucher = () => {
  const currenDate = new Date()

  const dispatch = useDispatch()
  const {vouchers} = useSelector(state => state.admin)

  // state 
  // handle select voucher

  const [isActive, setActive] = useState(false)
  const [isOpen, setOpen] = useState(false)
  let lengthVoucher = 1
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleClickListVoucher = () => {
    setOpen(!isOpen);
  };
 

  useEffect(() =>{

      dispatch(getVouchers())

  },[])

  console.log(vouchers)


  return (
    <div className='bg-cart-voucher'>
    <div className= 'cart-voucher' >
      <div className="use-voucher" onClick={handleToggle}>
        <i class="fa-solid fa-percent"></i>
          <span>
          
             Sử dụng mã giảm giá
          </span>
      </div>
      <div className='input-voucher'
            style={{
              display : isActive ? 'block' : 'none'
            }}
      > 
        <div className="input-group-voucher" >
            <input type="text" placeholder='Nhập mã giảm giá' onClick={handleClickListVoucher}/>
            <button>Áp dụng</button>

        </div>

        {
        isOpen ? 
        
          (<div className="modal-list-voucher" 
                style={{
                  height : lengthVoucher <= 3 ? 'auto' : '300px',
                  overflowY : lengthVoucher <= 3 ? '' : 'scroll',

                }}
            >
              {
                vouchers.length == 0 ?
               (<p style={{textAlign : 'center',padding : '5px'}}>Không có voucher</p>):(
                vouchers.map(val => 
                  <VoucherItem data={val} />
                  )
               )
              }
              
          </div>)
        : ('')
        

        }
      </div>
    </div>

    
    </div>
  )
}

export default InfoVoucher 
