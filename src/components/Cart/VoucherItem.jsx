import React from 'react'

const VoucherItem = ({data}) => {
  return (
    <div className='bg-voucher-item flex a-center'>
        <div className="select-voucher" style={{marginRight : '10px'}}>
            <input type="radio" name="" id="" />
        </div>
        <div className='voucher-item'>
            <div className="name-voucher">
                <p>{data.content}</p>
            </div>
            <div className="percent">
                <span>{data.sales}% Giảm giá</span>
            </div>
            <div className="code-voucher">
                <p>MÃ GIẢM GIÁ: <b>{data.voucher}</b></p>
            </div>
            <div className="time-voucher">
                <p>Có giá trị</p>
            </div>
        </div>
    </div>
  )
}

export default VoucherItem
