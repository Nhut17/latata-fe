import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../../../redux/Product/productSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetActionAdmin, updateProduct } from "../../../../redux/Admin/adminSlice";
import InfoTechProduct from "./SelectDetailProduct/InfoTechProduct";
function AdminUpdate(props) {
  const { register, handleSubmit } = useForm();
 
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { productDetail } = useSelector(state => state.product)
  const { successUpdate } = useSelector(state => state.admin)
  const {id} = useParams()


  useEffect(() => {
    dispatch(getProductDetail(id))
  },[])

  useEffect(() => {
    if(successUpdate)
    {
      toast.success('Cập nhật sản phẩm thành công', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
        const time = setTimeout(() => {
          navigate('/admin')
        },1500)
    
        return () => {
          clearTimeout(time)
        }
    }

  },[successUpdate])



  const updateProducts =  (dataForm) => {

    const {name,price,promotion,stock,description } = dataForm
  
    const data = {
      name: name,
      price: price,
      promotion: promotion,
      stock: stock,
      description: description,
      productId: id
    }


    dispatch(updateProduct(data))
    console.log(data)

  };


  let detailProduct = true;

  return (
    <div className="admin-create">
      <ToastContainer />
      <span>Cập nhật sản phẩm</span>
      {detailProduct ? (
        <form
        className="admin-create-product"
        onSubmit={handleSubmit(updateProducts)}
        encType='multipart/form-data'
      >
        <span>Tên sản phẩm</span>
        <input  defaultValue={productDetail.name}
                {...register("name")} />

        <span>Danh mục</span>
        <input
          defaultValue={productDetail.category}
          disabled={true}
          {...register("category")}
          placeholder=""
          type="text"
        />

      <InfoTechProduct id_cate={'637e40260f52ec2c4eb8180b'}
                                register={register}
                                />

        <span>Giá</span>
        <input
          defaultValue={productDetail.price}
          {...register("price")}
          placeholder=""
          type="number"
        />

        <span>Giảm giá</span>
        <input
            defaultValue={productDetail.promotion} 
            {...register("promotion")} placeholder="" type="number" />

        <span>Số lượng</span>
        <input
              defaultValue={productDetail.stock} 
              {...register("stock")} placeholder="" type="number" />


        <span style={{marginTop : '10px'}}>Hình ảnh</span>

        <div className="img-group flex ">
          <form>
            <div class="image-upload">
              <label for="file-input">
                <div class="upload-icon">
                  <img  alt="" 
                
                  />
                  </div>
              </label>
              <input id="file-input" type="file"
              {...register("images")}
              // onChange={handleImage}
              accept="images/*"
              />
            </div>
          </form>


        </div>
    
        {/* <span>Hình ảnh</span>
        <img 
          src
          style={{
            width: 100,
            height: 100
          }} 
         />

        <input
          type="file"
          {...register("images")}
          onChange
          accept="images/*"
        /> */}
       

          <span style={{marginTop: '10px'}}>Chi tiết sản phẩm</span>
          <textarea 
          defaultValue={productDetail.description}
          name="" id="" cols="30" rows="10" 
            {...register('description')} ></textarea>

        <button type="submit">Cập nhật sản phẩm</button>
      </form>
  
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminUpdate;
