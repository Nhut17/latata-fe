import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { editCurrentPage, paginationProduct } from '../../../../actions/ProductAction';
// import Product from './Product';
import { Pagination } from 'antd';
import Cate from './Cate'
function ListCate({ listCate }) {

    return (
        <div className="admin-cate-list">
            <table>
                <tr>
                    <th style={{ width: '30%' }}>STT</th>
                    <th style={{ width: '70%' }}>Danh mục</th>
                    {/* <th style={{ width: '50%' }}>Tên</th> */}
                </tr>
                {
                    listCate.map((data, index) => (
                        <Cate data={data} stt={index} />
                    ))
                }
            </table>


        </div>
    );
}

export default ListCate;