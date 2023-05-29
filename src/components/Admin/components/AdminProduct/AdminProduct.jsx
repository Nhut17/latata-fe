import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.scss";
import { getProduct } from "../../../../redux/Product/productSlice";

const AdminProduct = () => {

  const dispatch = useDispatch();
  const { listProduct } = useSelector(state => state.product)

  const [search,setSearch] = useState('')

  useEffect(()=> {
    dispatch(getProduct())
  },[])

  const searchProduct =  (list_product) => {
      return list_product.filter(val => val.name?.toLowerCase().includes(search.toLowerCase()))
  }
  

  return (
    <div className="admin-product">

     

      <div className="admin-product-link">
        <div className="input-search">
        <i class="fa-solid fa-magnifying-glass ic"></i>
          <input type="text" placeholder="Tìm kiếm thông tin sản phẩm" onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <Link to="/admin/product/create"> 
          <button >
            + Thêm sản phẩm
          </button>
        </Link>
      </div>
      
      
      <ListProduct listProduct={searchProduct(listProduct)} />
      
    </div>
  );
}

export default AdminProduct;
