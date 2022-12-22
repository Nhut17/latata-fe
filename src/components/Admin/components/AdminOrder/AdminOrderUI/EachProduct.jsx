import React from 'react'

const EachProduct = ({data}) => {
  return (
    <div className='order-each-product'>
    <table>
        <tr>
            <th style={{paddingLeft: '10px'}}>Sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
        </tr>
        <tr>
            <td style={{width : '30%'}}>
                <div className="img">
                    <img src={data?.images[0]?.url} alt="" />
                </div>

            </td>
            <td>
                <p><b>{data.name}</b></p>
                <span>{data.price.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ x {data.quantity}</span>
            </td>
            <td>{(data.price*data.quantity).toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</td>
        </tr>
    </table>
</div>
  )
}

export default EachProduct
