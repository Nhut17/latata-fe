import React, { useEffect } from 'react'
import '../sass/Accessories/accessories.scss'
import MainAccessories from '../components/Accessories/MainAccessories'
import { AccessoryContext } from '../context/accessoryContext'
import { sliderAccessories } from '../components/Tablet/dataTablet'
import { bannerAccessories } from '../components/Tablet/dataTablet'
import { banner_block_product } from '../components/data'
import { menu_apple_accessories } from '../components/data'
import { menu_battery } from '../components/data'
import { menu_chargeCable } from '../components/data'
import { menu_headphone } from '../components/data'
import { menu_gaming } from '../components/data'
import { menu_smartHome } from '../components/data'
import { menu_speaker } from '../components/data'


const Acessories = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }, [])
    
    const context = {
        sliderAccessories,
        bannerAccessories,
        banner_block_product,
        menu_apple_accessories,
        menu_battery,
        menu_chargeCable,
        menu_gaming,
        menu_headphone,
        menu_speaker,
        menu_smartHome
    }

  return (
    <div className='accessories'>

       

        <AccessoryContext.Provider value={context} >

            <MainAccessories />

        </AccessoryContext.Provider>
    </div>
  )
}

export default Acessories