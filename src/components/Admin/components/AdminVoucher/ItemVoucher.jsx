import React from 'react'

const ItemVoucher = ({data}) => {

    const dateStart = new Date(data.createAt)
    const dateExpire = new Date(data.expiredIn)

  return (
    <>
        <td>{data.voucher}</td>
        <td>{data.content}</td>
        <td>{dateStart.toLocaleDateString()}</td>
        <td>{dateExpire.toLocaleDateString()}</td>
    </>
  )
}

export default ItemVoucher
