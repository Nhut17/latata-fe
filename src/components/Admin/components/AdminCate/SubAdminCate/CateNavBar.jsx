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
                    <button className="cate" style={getCurrentRef[0] == 'category' ? {
                    background : '#4D46FA',
                    color : 'white'
                } : {}}>Danh mục</button>
                        
                </Link>
                <Link to='/admin/category/brand' >
                    <button className="brand" style={getCurrentRef[0] == 'brand' ? {
                    background : '#4D46FA',
                    color : 'white'
                } : {}}>Hãng</button>
                
                </Link >

                <Link to='/admin/category/specification'>
                    <button className="specification" style={getCurrentRef[0] == 'specification' ? {
                    background : '#4D46FA',
                    color : 'white'
                } : {}}>Thông số kĩ thuật</button>
                
                </Link>
            </div>

            {children}
        </>
  )
}

export default CateNavBar