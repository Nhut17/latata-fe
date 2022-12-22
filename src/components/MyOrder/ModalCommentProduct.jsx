import React, { useState,useEffect } from 'react'
import { Modal } from 'react-responsive-modal';
import { useForm } from 'react-hook-form';
import { data } from 'jquery';
// import { createComment } from '../../redux/reducer/commentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Rating } from 'react-simple-star-rating'
import { reviewProduct } from '../../redux/Order/orderSlice';


const ModalCommentProduct = ({ openModalComment, setOpenModalComment, data }) => {

    const [rating, setRating] = useState(0)
    const [disableMove, setDisableMove] = useState(false)
    const dispatch = useDispatch()
    

   
   
    const handleRating = (rate: number) => {
        setRating(rate)
        setDisableMove(true)
    }
    const onPointerMove = (value: number, index: number) => {
        { disableMove === false && setRating(value) }
        console.log(value, index)
    }
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const toggle = () => {
        setOpenModalComment(false)
    }
    const {
        register,
        handleSubmit
    } = useForm()
  
    // const totalPrice = data.tranUnitPrice * data.tranQuantity
    const onHandleSubmit = (formData) => {
        const dataForm = {
            comment: formData.comment,
            rating: rating,
            productId: data.productId
        }
        console.log(data)
        dispatch(reviewProduct(dataForm))
        toggle()
        // dispatch(addAddresses(formData))
    }

    return (
        <div className='modal-comment-product'>

            <Modal
                open={openModalComment}
                onClose={toggle}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'custom-modal-add-new-address',
                }}>
                <form onSubmit={handleSubmit(onHandleSubmit)}>

                    <div className='add-new-rating'>
                        <span className='rating-product'>Nhận xét sản phẩm</span>
                        <div className='product-infor'>
                            <div className="img" style={{ backgroundImage: 'url(' + data?.images[0]?.url + ')' }}>
                                <span>{data.quantity}</span>
                            </div>
                            <div className="up">
                                <div className='product-name'>{data.name}</div>
                                <div className='product-price'>{data.price.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></div>
                            </div>
                        </div>
                        <div className='rating flex a-center'>
                            <span className='title-rating'>
                                {rating === 0 && 'Vui lòng đánh giá'}
                                {rating === 1 && 'Rất không hài lòng'}
                                {rating === 2 && 'Không hài lòng'}
                                {rating === 3 && 'Bình thường'}
                                {rating === 4 && 'Hài lòng'}
                                {rating === 5 && 'Cực kỳ hài lòng'}
                            </span>
                            <Rating
                                // onClick={handleRating}
                                ratingValue={rating}
                                size={50}
                                label
                                transition
                                onClick={handleRating}
                                onPointerEnter={disableMove === false && onPointerEnter}
                                onPointerLeave={disableMove === false && onPointerLeave}
                                onPointerMove={disableMove === false && onPointerMove}
                                // onPointerMove={handleHoverRating}
                                fillColor='orange'
                                emptyColor='gray'
                                className='foo' // Will remove the inline style if applied
                            />
                            {/* Use rating value */}
                            {/* {rating} */}
                        </div>
                        <div className="input-group">
                            <div className='input-common'>
                                <textarea className='comment-content'
                                    type="text"
                                    placeholder='Hãy chia sẽ cảm nhận của bạn về sản phẩm nhé'
                                    {...register('comment')} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='btn-group-add-comment'>
                        <button className='btn confirm'>Xác nhận</button>
                        <button className='btn cancel'>Hủy</button>
                    </div>
                </form>
                {/*  */}
            </Modal>
        </div>
    )
}
export default ModalCommentProduct