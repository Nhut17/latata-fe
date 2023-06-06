import React from 'react'

const Banner = ({banner}) => {



  return (
    <div className='banner'>
        <img src={banner.url} 
              key={banner.url_id} 
              alt={banner.url_id} />
    </div>
  )
}

export default Banner
