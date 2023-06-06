import { ShakeOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import VoucherItem from './VoucherItem'
import { useDispatch, useSelector } from 'react-redux'
import {CloseOutlined} from '@ant-design/icons'
import { getVouchers } from '../../redux/Admin/adminSlice'
import { getUserVoucher } from '../../redux/Cart/cartSlice'

const InfoVoucher = ({setGetSaleVoucher,selectedNameVoucher}) => {
  

  const dispatch = useDispatch()
  const {vouchers, useVoucherSuccessfull , useVoucher} = useSelector(state => state.admin)
  const {userVoucher} = useSelector(state => state.cart)
  // state 
  // handle select voucher



  const [isActive, setActive] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [listUsedVoucher,setListUsedVoucher] = useState([])

  useEffect(() => {
    dispatch(getUserVoucher())
  },[])

  useEffect(() => {

    if(userVoucher)
    {
      let usedVoucher = []
        userVoucher?.listVoucher?.forEach(val =>{
            if(!usedVoucher.includes(val))
            {
              usedVoucher.push(val)
            }
         } )
      
      if(usedVoucher.length > 0)
      {
        setListUsedVoucher(usedVoucher)
      }

    }

  },[userVoucher])
 
  const currentDate = new Date()

  console.log('list used voucher: ', listUsedVoucher)

  const filterVoucherExpired = vouchers?.filter(voucher => {

      const date_start = new Date(voucher.createAt)
      if (date_start.getTime() <= currentDate.getTime()){
          return true
      }
  } )

  console.log(filterVoucherExpired)

  const filterVoucherUsed = filterVoucherExpired?.filter(vou => {
    
      const index = listUsedVoucher.findIndex(val => vou.voucher.toLowerCase() === val.toLowerCase()  )
      
      if(index < 0)
      {
          return true
      }

  })

  console.log(filterVoucherUsed)
  
// console.log('ftvc'+filterVoucher)
  const [selectedVoucher, setSelectedVoucher] = useState()

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
     

  },[selectedVoucher])


 


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
                filterVoucherUsed.length == 0  ?
               (<p style={{textAlign : 'center',padding : '5px'}}>Không có voucher</p>):(
                filterVoucherUsed.map(val =>                      
                      <VoucherItem  data={val}
                                    selectedVoucher={selectedVoucher}
                                    setSelectedVoucher={setSelectedVoucher}
                                    setSelectedNameVoucher={selectedNameVoucher}
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
