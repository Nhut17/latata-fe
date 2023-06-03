import { ShakeOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import VoucherItem from './VoucherItem'
import { useDispatch, useSelector } from 'react-redux'
import { getVouchers, useVoucher } from '../../redux/Admin/adminSlice'

const InfoVoucher = ({}) => {
  

  const dispatch = useDispatch()
  const {vouchers, useVoucherSuccessfull , useVoucher} = useSelector(state => state.admin)

  // state 
  // handle select voucher
  console.log('useVC'+ useVoucher)

  const [isActive, setActive] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const currentDate = new Date()

  const filterVoucher = vouchers?.filter(voucher => {

      const date_start = new Date(voucher.createAt)
      if (date_start.getTime() <= currentDate.getTime()){
          return true
      }
  } )
// console.log('ftvc'+filterVoucher)
  const [selectedVoucher, setSelectedVoucher] = useState()
  console.log('selectVC' + selectedVoucher)
  let lengthVoucher = 1
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleClickListVoucher = () => {
    setOpen(!isOpen);
  };
 

  // useEffect(() =>{

  //     // dispatch(getVouchers(selectedVoucher))



  // },[])

  console.log(vouchers)


  console.log(currentDate)


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
            <input type="text" placeholder='Nhập mã giảm giá' onClick={handleClickListVoucher} value={selectedVoucher}/>
            {/* <button type='button'>Áp dụng</button> */}

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
                filterVoucher.length == 0  ?
               (<p style={{textAlign : 'center',padding : '5px'}}>Không có voucher</p>):(
                filterVoucher.map(val =>                      
                      <VoucherItem  data={val}
                                    selectedVoucher={selectedVoucher}
                                    setSelectedVoucher={setSelectedVoucher}
                    />
                    
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
