import React,{useEffect, useState} from 'react'
import ModalUpdateAddress from './ModalUpdateAddress'

const InfoListAddress = ({val,selected,setSelectedAddress,isDefault}) => {
const [showUpdateAddressItem, setShowUpdateAddressItem] = useState(false)
const handleClickUpdateAddressItem = () => {
    setShowUpdateAddressItem(true)
}

 



  return (
    <>
    <div className="address-item flex" key={val._id}>
                 
                 <div className="input-radio">
                     <input 
                         checked={ selected == val._id }
                         
                         onChange={() => setSelectedAddress(val._id)}
                         type="radio" 
                         name="" 
                         id="" />
             
                 </div>
                 
             
                 <div className="detail">
                     <p><span>{val.name}</span> <span className='space'>|</span> <span className='gray'>{val.phone}</span> </p>
                     
                     <span className='gray'>{val.address}</span>
             
                     {
                         val.address_default == 1 && 
                         <div className="default" >
                             <span>Mặc định</span>
                         </div>
                     }
                    
             
                 </div>
                 <div className="update-address" onClick={handleClickUpdateAddressItem} style={{cursor : 'pointer'}}>
                     <span>Cập nhật</span>
                 </div>
             
             
             </div>

             {

                showUpdateAddressItem && 
                <ModalUpdateAddress  showUpdateAddressItem={showUpdateAddressItem} 
                                setShowUpdateAddressItem={setShowUpdateAddressItem} 
                                data={val}
                />

            }
    </>
  )
}

export default InfoListAddress
