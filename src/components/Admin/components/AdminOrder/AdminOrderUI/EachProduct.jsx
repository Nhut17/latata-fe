import React from 'react'

const EachProduct = ({data}) => {
  return (
   

       
        <tr className='order-each-product'>
            <td >
                <div className="img">
                    <img src={data?.images[0]?.url} alt="" />
                </div>

            </td >
            <td >
                <p style={{'marginBottom': '10px'}}><b>{data.name}</b></p>
                <span >{data.price.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ x {data.quantity}</span>
            </td>
            <td >{(data.price*data.quantity).toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</td>
        </tr>
  

  )
}

export default EachProduct
