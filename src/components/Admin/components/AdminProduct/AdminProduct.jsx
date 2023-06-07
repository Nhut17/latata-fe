import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.scss";
import { getProduct } from "../../../../redux/Product/productSlice";
import ScrollToTop from "../../../Home/ScrollToTop";
import { Tabs, Tab, Content } from '../TabButton/Tab'


const AdminProduct = () => {

  const dispatch = useDispatch();
  const { listProduct } = useSelector(state => state.product)

  const filterStockProduct = listProduct.filter(listProduct => listProduct.stock == 0)

  

  const [search,setSearch] = useState('')
  const [visible,setVisible] = useState(false)
  
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  useEffect(()=> {
    dispatch(getProduct())
  },[])

  const searchProduct =  (list_product) => {
      return list_product.filter(val => val.name?.toLowerCase().includes(search.toLowerCase()))
  }

  useEffect(() => {

    const scrollTo = () => {
      if(window.scrollY > 1000)
      {
        setVisible(true)
      }
      else{
        setVisible(false)
      }
    }

    document.addEventListener('scroll', scrollTo)

    return () => {
      document.removeEventListener('scroll', scrollTo)
    }

  },[])
  

  return (
    <div className="admin-product">

    {
      visible &&
     <ScrollToTop />
    }

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
      
      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
            Hàng tồn
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
            Hết hàng
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
          <ListProduct listProduct={searchProduct(listProduct)} />
        </Content>

        <Content active={active === 1}>
          <ListProduct listProduct={searchProduct(filterStockProduct)} />
        </Content>
      </>
      
      
    </div>
  );
}

export default AdminProduct;
