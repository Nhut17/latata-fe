import React from 'react'

const VoucherItem = () => {
  return (
    <div className='bg-voucher-item flex a-center'>
        <div className="select-voucher" style={{'marginRight' : '10px'}}>
            <input type="radio" name="" id="" />
        </div>
        <div className='voucher-item'>
        <div className="name-voucher">
            <p>QUOC TE PHU NU</p>
        </div>
        <div className="percent">
            <span>60% Giảm giá</span>
        </div>
        <div className="code-voucher">
            <p>MÃ GIẢM GIÁ: .....</p>
        </div>
        <div className="time-voucher">
            <p>Có giá trị</p>
        </div>
        </div>
    </div>
  )
}

export default VoucherItem
