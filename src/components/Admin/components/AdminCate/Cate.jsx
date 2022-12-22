import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";

// import { deleteCate } from '../../../../redux/reducer/categorySlice'

function Cate({ data, stt }) {
    const dispatch = useDispatch()

    const handleOnDeleteCate = () => {
        // dispatch(deleteCate(data.id))
    }
    return (
        <tr key={data?.id}>
            <td w>{stt + 1}</td>
            <td>{data?.name}</td>
            {/* <td>{data?.catName}</td> */}
            <td
                className="delete-cate"
            >
                {/* <div onClick={handleOnDeleteCate}>
                    <DeleteOutlined />
                </div> */}

            </td>
        </tr>
    );
}

export default Cate;
