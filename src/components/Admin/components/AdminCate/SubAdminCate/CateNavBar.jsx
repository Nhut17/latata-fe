import React from 'react'
import { Link } from 'react-router-dom'
import '../AdminCate.scss'
const CateNavBar = ({children}) => {

    const getPara = window.location.href.split('/')[5]
    console.log('getParams' + getPara)
    return (
        <>
            <div className="list-box"   >
                <Link to='/admin/category' >
                    <button className="cate" style={getPara == undefined ? {
                    background : '#4D46FA',
                    color : 'white'
                } : {}}>Danh mục</button>
                        
                </Link>
                <Link to='/admin/category/brand' >
                    <button className="brand" style={getPara == 'brand' ? {
                    background : '#4D46FA',
                    color : 'white'
                } : {}}>Hãng</button>
                
                </Link >

                <Link to='/admin/category/specification'>
                    <button className="specification" style={getPara == 'specification' ? {
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