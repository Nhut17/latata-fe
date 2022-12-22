import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import '../AdminOrder.scss'
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrder } from "../../../../../actions/OrderAction";


import ListOrder from "../AdminOrderUI/ListOrder";

function AdminOrderAll(props) {


  return (
    <React.Fragment>

      <ListOrder />
      
    </React.Fragment>
  );
}

export default AdminOrderAll;
