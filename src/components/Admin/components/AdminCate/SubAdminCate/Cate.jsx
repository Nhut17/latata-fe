import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
// import Listcate from "./Listcate";
import "../AdminCate.scss";
import ListCate from "../ListCate";
import { getCate } from "../../../../../redux/Category/categorySlice";

const Cate = () => {

    const dispatch = useDispatch();
    const { listCate } = useSelector(state => state.category)

    useEffect(()=> {
        dispatch(getCate())
    },[])
    return (
        <div className="admin-cate">
            {
                listCate &&
                <ListCate listCate={listCate} />
                } 
        </div>
  )
}

export default Cate