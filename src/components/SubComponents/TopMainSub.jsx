import React from 'react'
import Breadcrumb from '../Tablet/Breadcrumb.jsx'
import TopSlider from '../Tablet/TopSlider.jsx'

const TopMainSub = ({parentCate,childCate,totalProduct,sliders,banners}) => {
  return (
    <div className='top-main-sub'>
        <div className="container">
          <Breadcrumb parentCate={parentCate} childCate={childCate} totalProduct={totalProduct} />

          <TopSlider sliders={sliders} banners={banners} />
        </div>
    </div>
  )
}

export default TopMainSub
