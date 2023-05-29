import { DeleteOutlined } from '@ant-design/icons'
import React from 'react'
import { deleteBrand } from '../../../../../redux/Admin/adminSlice'
import { useDispatch } from 'react-redux'

const BrandItem = ({data}) => {
    const dispatch = useDispatch()
  
    const handleDelete = () => {
      dispatch(deleteBrand(data._id))
  }
    return(
        <tr>
            <td>{data.name}</td>
            <td className='brand-item-logo'><img src={data.logo} alt="" /></td>
            <td
                className="delete-brand"
                style={{cursor : 'pointer'}}
                onClick={handleDelete}
            >
                <DeleteOutlined />
            </td>
            {/* <td className="update-brand">
                <EditOutlined/>
            </td> */}
        </tr>
    )
}

export default BrandItem
