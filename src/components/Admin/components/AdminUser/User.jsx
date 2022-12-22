import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteOutlined} from '@ant-design/icons';
import { deleteUser } from '../../../../redux/Admin/adminSlice';

function User({ data, stt }) {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteUser(data._id))   
    }

    return (
        <tr style={{textAlign: 'center'}}>
            <td>{stt + 1}</td>
            <td>{data?.name}</td>
            <td>{data?.email}</td>
            <td>{data?.email}</td>
            <td>{data?.phone}</td>
            

            <div onClick={handleDelete} 
                className='delete-user'

                >
                    <DeleteOutlined />
                </div>
        </tr>
        
    );
}

export default User;