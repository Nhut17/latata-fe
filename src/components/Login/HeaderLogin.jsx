import React from 'react'
import logo from '../../assets/images/logo_color.png'
import { Link } from 'react-router-dom'
const HeaderLogin = () => {
  return (
    <div className='header-login'>
      <div className="container flex a-center">
            <div className="logo">
              <Link to='/'>
                <img src={logo} alt="" />
              </Link>
            </div>

      </div>
    </div>
  )
}

export default HeaderLogin
