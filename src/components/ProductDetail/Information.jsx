import React from 'react'
import { information_technical } from './data'
const Information = ({data}) => {
    
    return (
        <div className='product-information flex j-between bd-bottom'>
        <div className="information-product">
            <h3>Thông tin sản phẩm</h3>
            <p className='infor-product-detail'>
                {data.description}
            </p>
        </div>
        <div className="information-technical">
            <h3>Thông số kĩ thuật</h3>
            <table className='technical-detail'>
                {information_technical.map(val => (
                    <tr>
                        <th>{val.title}</th>
                        <td>{val.content}</td>
                    </tr>
                ))}
            </table>
        </div>
        </div>
    )
}

export default Information
