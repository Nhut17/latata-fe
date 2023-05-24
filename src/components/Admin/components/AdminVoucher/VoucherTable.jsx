import React from 'react'
import ListVoucher from './ListVoucher'

const VoucherTable = () => {
  return (
    <table>
                <tr style={{
                    textAlign: 'center'
                }}>
                        <th>Mã giảm giá</th>
                        <th>Nội dung</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th>
                </tr>
               <ListVoucher />


    </table>
  )
}

export default VoucherTable
