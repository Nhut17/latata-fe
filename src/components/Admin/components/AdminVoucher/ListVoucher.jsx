import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVouchers } from '../../../../redux/Admin/adminSlice'
import ItemVoucher from './ItemVoucher'
import { ToastContainer, toast } from 'react-toastify'


const ListVoucher = () => {

    const dispatch = useDispatch()
    const { vouchers,successSendVoucher } = useSelector(state => state.admin)
    


    console.log('suces list: ', successSendVoucher)

    useEffect(() => {
        dispatch(getVouchers())
    },[])

    useEffect(() => {

        if(successSendVoucher)
        {
            toast.success('Gửi voucher thành công!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
          
              const time = setTimeout(() => {
                window.location.reload()
              },1500)
          
              return () => {
                clearTimeout(time)
              }
        }
  
    },[successSendVoucher])

    

  return (
    <>
        <ToastContainer />
        {
            vouchers && vouchers.map( data => (
                <>
                   <ItemVoucher data={data} />
                </>
            ))
        }
    </>
  )
}

export default ListVoucher
