import React, { useEffect } from 'react'
import MainSmartWatch from '../components/SmartWatch/MainSmartWatch'
import '../sass/SmartWatch/smartWatch.scss'
import { SmartWatchContext } from '../context/smartWatchContext'
import { banner_block_product_smart_watch } from '../components/data'
import { menu_fashion } from '../components/data'
import { menu_utility } from '../components/data'
import { menu_sport } from '../components/data'
import { menu_watch_chain } from '../components/data'

const SmartWatch = () => {

  const context = {
    banner_block_product_smart_watch,
    menu_fashion,
    menu_sport,
    menu_utility,
    menu_watch_chain,

  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }, [])

  return (
    <div className='smart-watch'>

      
        
        <SmartWatchContext.Provider value={context}>

          <MainSmartWatch />
        
        </SmartWatchContext.Provider>
    </div>
  )
}

export default SmartWatch