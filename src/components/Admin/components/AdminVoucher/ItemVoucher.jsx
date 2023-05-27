import React from 'react'

const ItemVoucher = ({data}) => {

    const dateStart = new Date(data.createAt)
    const dateExpire = new Date(data.expiredIn)

  return (
    <tr style={{textAlign: 'center', padding: '10px 0px'}}>
        <td>{data.voucher}</td>
        <td>{data.content}</td>
        <td>{dateStart.toLocaleDateString()}</td>
        <td>{dateExpire.toLocaleDateString()}</td>
    </tr>
  )
}

export default ItemVoucher
