import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../sidebar/Sidebar'

const AdminNavBar = ({children}) => {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='admin-nav-bar'>
        <Sidebar />
        

        <div className="nav-bar-content" style={{background: 'whitesmoke'}}>
          <div className="dashboard-top-content">
              <li className="dashboard-top-content-avatar">
                <img src={currentUser?.avatar?.url}></img>
                <span>{currentUser?.name}</span>
              </li>
              <li className="dashboard-top-content-bell">
                {/* <BellOutlined></BellOutlined> */}
              </li>
          </div>
            {children}
        </div>

    </div>
  )
}

export default AdminNavBar
