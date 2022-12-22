import React, { useEffect } from 'react'

const ScrollToTop = () => {

    const handelScrollTop = ( ) =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div className='scroll-to-top' onClick={handelScrollTop} >
        <i class="fa-solid fa-angle-up ic"></i>
    </div>
  )
}

export default ScrollToTop
