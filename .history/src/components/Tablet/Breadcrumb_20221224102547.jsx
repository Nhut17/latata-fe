import React from 'react'

const Breadcrumb = ({parentCate,childCate,totalProduct}) => {
  return (
    <div className='breadcrumb' style={{
      paddingTop: 10
    }}>
        <ul>
          <li><a href="" className='parentCate'>{parentCate}</a></li>
          <li className='childCate'><span className='quantity'>{totalProduct} {childCate}</span></li>
        </ul>
    </div>
  )
}



export default Breadcrumb
