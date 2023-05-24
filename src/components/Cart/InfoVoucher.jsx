import { ShakeOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import VoucherItem from './VoucherItem'

const InfoVoucher = () => {
  const [isActive, setActive] = useState(false)
  const [isOpen, setOpen] = useState(false)
  let lengthVoucher = 1
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleClickListVoucher = () => {
    setOpen(!isOpen);
  };
  console.log('is' +isActive)
  console.log('open' +isOpen)

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
                  height : lengthVoucher <= 3 ? '300px' : 'auto',
                  overflowY : lengthVoucher <= 3 ? 'scroll' : '',

                }}
            >
              <VoucherItem/>
              <VoucherItem/>
              <VoucherItem/>
              <VoucherItem/>
          </div>)
        : ('')
        

        }
      </div>
    </div>

    
    </div>
  )
}

export default InfoVoucher 
