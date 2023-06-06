import { ShakeOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import VoucherItem from './VoucherItem'
import { useDispatch, useSelector } from 'react-redux'
import {CloseOutlined} from '@ant-design/icons'
import { getVouchers } from '../../redux/Admin/adminSlice'

const InfoVoucher = ({setGetSaleVoucher}) => {
  

  const dispatch = useDispatch()
  const {vouchers, useVoucherSuccessfull , useVoucher} = useSelector(state => state.admin)

  // state 
  // handle select voucher
  console.log('useVC'+ vouchers)

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
 

  useEffect(() =>{

      dispatch(getVouchers(selectedVoucher))
      if(selectedVoucher?.length > 0){
        const useVoucher = vouchers?.filter(voucher => voucher.voucher == selectedVoucher)
        setGetSaleVoucher(useVoucher[0]?.sales)
      } 
      // console.log('useVC'+ useVoucher)

  },[selectedVoucher])


 


  console.log(currentDate)

  const clearInput = () =>{
    let getValue= document.getElementById("clear-input");
      if (getValue.value !="") {
          getValue.value = "";
          setSelectedVoucher(' ')
      }
}


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
            <input type="text" id='clear-input' placeholder='Nhập mã giảm giá' 
                    onClick={handleClickListVoucher} value={selectedVoucher} 
                     />
            {/* <button type='button'>X</button> */}
            <span  onClick={clearInput}>
              <CloseOutlined/>
            </span>
            

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
