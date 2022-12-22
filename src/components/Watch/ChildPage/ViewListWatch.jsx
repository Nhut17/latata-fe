import React from 'react'
import TopSlider from '../../Tablet/TopSlider'
import { bannerWatch, sliderWatch } from '../dataWatch'

export const ViewListWatch = () => {
  return (
    <TopSlider sliders={sliderWatch} banners={bannerWatch}/>

  )
}
