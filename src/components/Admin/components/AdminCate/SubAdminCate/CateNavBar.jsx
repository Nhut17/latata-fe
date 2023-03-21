import React from 'react'
import { Link } from 'react-router-dom'
import '../AdminCate.scss'
const CateNavBar = ({children}) => {
  return (
    <>
        <div className="list-box">
            <Link to='/admin/category'>
                <button className="cate">Danh mục</button>
            
            </Link>
            <Link to='/admin/category/brand'>
                <button className="brand">Hãng</button>
            
            </Link >

            <Link to='/admin/category/specification'>
                <button className="specification">Thông số kĩ thuật</button>
            
            </Link>
        </div>

        {children}
    </>
  )
}

export default CateNavBar