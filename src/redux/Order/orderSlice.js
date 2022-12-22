import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import api from "../../api/api"
import { getCartUser } from "../Cart/cartSlice"
import { getProduct, getProductDetail } from "../Product/productSlice"


const initialState = {
    successOrder: false,
    successReview: false,
    successUpdateOrder: false,
    listOrder: null
}

export const createOrder = createAsyncThunk('order/create', 
                async(data,thunkAPI) => {

                    const token = localStorage.getItem('token')
                    const config = {
                        headers: { 
                            'Authorization': 'Bearer ' + token 
                        },
                    }

                    try{

                        const res = await api.post('/api/v1/order/new',data,config)

                        thunkAPI.dispatch(getCartUser())
                        thunkAPI.dispatch(getProduct())
                        return res.data

                    }
                    catch(err){
                        thunkAPI.rejectWithValue('Error create new order')
                    }

                })

// get orders - ADMIN
export const getAllOrder = createAsyncThunk('order/getAll', 
                async(data,thunkAPI) => {

                    const token = localStorage.getItem('token')
                    const config = {
                        headers: { 
                            'Authorization': 'Bearer ' + token 
                        },
                    }

                    try{

                        const res = await api.get('/api/v1/admin/orders',config)

                        return res.data.orders

                    }
                    catch(err){
                        thunkAPI.rejectWithValue('Error get all order')
                    }

                })
            
// update - ADMIN
export const updateOrder = createAsyncThunk('order/update', 
                async(data,thunkAPI) => {

                    const {id , status} = data

                    const token = localStorage.getItem('token')
                    const config = {
                        headers: { 
                            'Authorization': 'Bearer ' + token 
                        },
                    }

                    try{

                        const res = await api.put(`/api/v1/admin/order/${id}`,{status},config)

                        thunkAPI.dispatch(getAllOrder())

                        return res.data

                    }
                    catch(err){
                        thunkAPI.rejectWithValue('Error get all order')
                    }

                })
            
// create review product
export const reviewProduct = createAsyncThunk('order/review',
        async(data, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
                 
                
                const res = await api.post('/api/v1/review',data,config)
                
                // console.log(res.data)
                thunkAPI.dispatch(getProductDetail(data.productId))
                
                return res.data
            

            } catch (error) {
                return thunkAPI.rejectWithValue('Error create review')
            }
        }
)



const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        resetActionOrder: (state,action) => {
             state.successReview = false
             state.successOrder = false
             state.successUpdateOrder = false
        }
    },
    extraReducers: {
        [createOrder.fulfilled] : (state,action) =>{
            state.successOrder = true;
        },
        [createOrder.rejected]: (state,action) =>{
            state.successOrder = false
        },
        [getAllOrder.fulfilled]: (state,action) =>{
            state.listOrder = action.payload
        },
        [reviewProduct.fulfilled]: (state,action) =>{
             state.successReview = true
        },
        [updateOrder.fulfilled]: (state,action) =>{
             state.successUpdateOrder = true
        },
    }
})

export const { resetActionOrder } = orderSlice.actions

export default orderSlice.reducer