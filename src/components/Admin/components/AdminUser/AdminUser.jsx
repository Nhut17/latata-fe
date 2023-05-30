import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListUser from './ListUser';
import './AdminUser.scss'
import { getAllUser } from '../../../../redux/Admin/adminSlice';



function AdminUser() {
    const dispatch = useDispatch()
    const { listUser } = useSelector(state => state.admin)


   



    return (
        <div className="admin-user" style={{marginTop:50}}>
            <span style={{
                fontWeight: 'bold',
                fontSize: 24
            }} >Khách hàng</span>
            {
                <ListUser listUser={listUser} />

            
            }
        </div>
    );
}

export default AdminUser;