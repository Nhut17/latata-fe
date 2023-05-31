import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVouchers } from '../../../../redux/Admin/adminSlice'
import ItemVoucher from './ItemVoucher'


const ListVoucher = () => {

    const dispatch = useDispatch()
    const { vouchers } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(getVouchers())
    },[])

    

  return (
    <>
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
