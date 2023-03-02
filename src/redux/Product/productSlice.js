import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from '../../api/api'
import { getCartUser } from "../Cart/cartSlice";


const initialState = {
    listProduct: [],
    loading: false,
    productDetail: {},
    priceDeal: 0,
    listProductCate: null,
}

// Get All Product
export const getProduct = createAsyncThunk('product/getProduct' , 
        async(data,thunkAPI) => {
            try{
                const res = await api.get('/api/v1/products') 

                // thunkAPI.dispatch(getCartUser())
                return res.data?.products
            }
            catch (e){
                return thunkAPI.rejectWithValue('Error with get product API')
            }
        })

// Get All Product by category
export const getProductCate = createAsyncThunk('product/getProductCate' , 
        async(id,thunkAPI) => {
            try{
                const res = await api.get(`/api/v1/product/category/${id}`) 

                
                return res.data?.products
            }
            catch (e){
                return thunkAPI.rejectWithValue('Error with get product API')
            }
        })


// Get Product Detail
export const getProductDetail = createAsyncThunk('product/productDetail', 
        async(id,thunkAPI) => {
            try{
                const res = await api.get(`/api/v1/product/${id}`) 
                return res.data.product
            }
            catch (e){
                return thunkAPI.rejectWithValue('Error with get product API')
            }
        })



const productReducer = createSlice({
    name: 'product',
    initialState,
    reducers:{
        resetListCate: (state,action) => {
            state.listProductCate = null
        }
    },
    extraReducers: {
        [getProduct.pending]: (state,action) => {
            
            
        },
        [getProduct.fulfilled]: (state,action) => {
            
            state.listProduct = action.payload
        },
        [getProductCate.fulfilled]: (state,action) => {
            // state.loading = false;
            state.listProductCate = action.payload
        },
        [getProduct.rejected]: (state,action) => {

        },
        [getProductDetail.pending] : (state,action) => {
            state.loading = true
        },
        [getProductDetail.fulfilled] : (state,action) => {
            state.loading = false
            state.productDetail = action.payload
            state.priceDeal  = state.productDetail.price - state.productDetail.price*(state.productDetail.promotion / 100) 
        }
    }

})


export const { resetListCate } = productReducer.actions
export default productReducer.reducer;