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

    console.log(vouchers)

  return (
    <tr style={{textAlign: 'center'}}>
        {
            vouchers && vouchers.map( data => (
                <>
                   <ItemVoucher data={data} />
                </>
            ))
        }
    </tr>
  )
}

export default ListVoucher
