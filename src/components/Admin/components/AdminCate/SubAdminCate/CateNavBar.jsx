import React from 'react'
import { Link } from 'react-router-dom'
import '../AdminCate.scss'
const CateNavBar = ({children}) => {

    const currentHref = window.location.href

    const getCurrentRef = currentHref.split('/').reverse()

    console.log('get'+getCurrentRef[0])
    return (
        <>
            <div className="list-box"   >
                <Link to='/admin/category' >
                    <button className="cate" >Danh mục</button>
                        
                </Link>
                <Link to='/admin/category/brand' >
                    <button className="brand" >Hãng</button>
                
                </Link >

                <Link to='/admin/category/specification'>
                    <button className="specification" >Thông số kĩ thuật</button>
                
                </Link>
            </div>

            {children}
        </>
  )
}

export default CateNavBar