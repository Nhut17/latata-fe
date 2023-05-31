import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { deleteVoucher } from '../../../../redux/Admin/adminSlice'
const ItemVoucher = ({data}) => {

    const dispatch = useDispatch()

    const dateStart = new Date(data.createAt)
    const dateExpire = new Date(data.expiredIn)

    const options = {
      timeZone: 'Asia/Bangkok',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    // console.log('dateStart: ' + dateStart.toLocaleString('en-US',options))
    // console.log('dateExpired: ' + dateExpire.toLocaleString())

    const handleDelete = () =>{
        dispatch(deleteVoucher(data._id))
    }

  return (
    <tr style={{textAlign: 'center', padding: '10px 0px'}}>
        <td>{data.voucher}</td>
        <td>{data.content}</td>
        <td>{data.sales}%</td>
        <td style={{
          width: '16%',
          padding: 10
        }} >{dateStart.toLocaleDateString('en-US',options)}</td>
        <td style={{
          width: '16%',
        }}>{dateExpire.toLocaleDateString('en-US',options)}</td>
        <td
                className="delete-brand"
                style={{cursor : 'pointer'}}
               
            >
                <DeleteOutlined onClick={handleDelete} />
          </td>
    </tr>
  )
}

export default ItemVoucher
