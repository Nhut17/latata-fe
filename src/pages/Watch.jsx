import React, { useEffect } from 'react'
import '../sass/watch/watch.scss'
import { WatchContext } from '../context/watchContext'
import { sliderWatch, bannerWatch, width_line_strap, listWatchProducts, WatchCategories,line_strap } from '../components/Watch/dataWatch'
import MainWatch from '../components/Watch/MainWatch'
const Watch = () => {
  const context = {
    sliderWatch,
    bannerWatch,
    listWatchProducts,
    WatchCategories,
    width_line_strap,
    line_strap
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }, [])

  return (
    <div className='watch bd-bottom'>
      <WatchContext.Provider value={context}> 
          <MainWatch/>
      </WatchContext.Provider>
    </div>
  )
}

export default Watch
