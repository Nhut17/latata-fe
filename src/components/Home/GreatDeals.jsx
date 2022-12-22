import React from 'react'
import shock_1 from '../../assets/images/home/shock_1.png'
import shock_2 from '../../assets/images/home/shock_2.png'
import shock_3 from '../../assets/images/home/shock_3.png'
const GreatDeals = () => {



  return (
    <div className='great-deals '>
        <h3>Ưu đãi ngập tràn</h3>

        <div className="banner_deals flex j-between">
            <img src={shock_1} alt="" />
            <img src={shock_2} alt="" />
            <img src={shock_3} alt="" />
        </div>
    </div>
  )
}

export default GreatDeals
