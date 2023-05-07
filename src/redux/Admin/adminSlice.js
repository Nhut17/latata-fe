import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from '../../api/api'
import { getProduct } from "../Product/productSlice";


const initialState = {
    listUser: [],
    sale_figure: [],
    list_sale_date: [],
    sale_cates: [],
    sum_sales: [],
    successCreate: false,
    successUpdate: false

}


// delete product admin
export const deleteProduct = createAsyncThunk('admin/product/delete', 
                async(id,thunkAPI) => {
                    try{

                        const token = localStorage.getItem('token')
                        const config = {
                            headers: {
                                Authorization: 'Bearer ' + token
                            }
                        }

                        const res = await api.delete(`/api/v1/admin/product/${id}
                            `,config)


                        thunkAPI.dispatch(getProduct())
                        return res.data
                    }
                    catch(e){

                    }
                })

// delete user admin
export const deleteUser = createAsyncThunk('admin/user/delete', 
                async(id,thunkAPI) => {
                    try{

                        const token = localStorage.getItem('token')
                        const config = {
                            headers: {
                                Authorization: 'Bearer ' + token
                            }
                        }

                        const res = await api.delete(`/api/v1/admin/user/${id}`,config)


                        thunkAPI.dispatch(getAllUser())
                        return res.data
                    }
                    catch(e){

                    }
                })

// get all user
export const getAllUser = createAsyncThunk('admin/user', 
        async(data,thunkAPI) => {
            try{
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
                
                const res = await api.get('/api/v1/admin/users',config)

                return res.data.users
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })


// create product admin 
export const createProduct = createAsyncThunk('admin/product/create',
                 async(data,thunkAPI) => {
                        try{
                            const token = localStorage.getItem('token')
                            const config = {
                                headers: {
                                    Authorization: 'Bearer ' + token,
                                
                                }
                            }
                           
                            const res = await api.post('/api/v1/admin/product/new',data,config)
            
                            // thunkAPI.dispatch(getProduct())
                            
                            return res.data
                    
                        }
                        catch(e){

                        }
                 })

// update product
export const updateProduct = createAsyncThunk('admin/product/update',
                 async(data,thunkAPI) => {
                        try{
                            const token = localStorage.getItem('token')
                            const config = {
                                headers: {
                                    Authorization: 'Bearer ' + token,
                                
                                }
                            }
                            // const productId = data.get('id')

                            const { name,price,promotion,stock,description,productId } = data

                            const update = {
                                name,
                                price,
                                promotion,
                                stock,
                                description
                            }
                           
                            const res = await api.put(`/api/v1/admin/product/${productId}`,update,config)
            
                            thunkAPI.dispatch(getProduct())
                            
                            return res.data
                    
                        }
                        catch(e){

                        }
                 })
                 

// get sale figures
export const saleFigure = createAsyncThunk( 'sales/get', 
                async(data, thunkAPI) => {

                    const ret = await api.get('/api/v1/sale-figures')


                    return ret.data.sale_figure
                })

export const selectSaleDate = createAsyncThunk('sales/select-date',
                async(data,thunkAPI) => {

                    const ret = await api.post('/api/v1/date-sales', data)

                    
                    return ret.data.sale_figures

                })


// get summary sale figures
export const getSummarySaleFigure = createAsyncThunk('sum-sales/get',
            async (data,thunkAPI) => {


                const ret = await api.post('/api/v1/select-sum-sales',{
                    year: data
                })

                return ret.data.sum_sales
            })

// select sum sales
export const selectSumSales = createAsyncThunk('sum-sales/select',
                async (data,thunkAPI) => {

                    const ret = await api.post('/api/v1/select-sum-sales',data)

                    return ret.data.sum_sales

                })


// get sales categories
export const getSalesCategories = createAsyncThunk('sale-category/get',
                async (date,thunkAPI) => {

                    const ret = await api.get('/api/v1/sale-cate')
                    

                    return ret.data.sales_cate
                })

// select sales category
export const selectSalesCate = createAsyncThunk('sale-category/select',
                async (data, thunkAPI) => {

                    const ret = await api.post('/api/v1/select-sale-cate', data)

                    return ret.data.sale_cates

                })


const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers:{
        resetActionAdmin: (state,action) => {
            state.successCreate = false
            state.successUpdate = false
        }
    },
    extraReducers: {
        [getAllUser.fulfilled]: (state,action) => {
            state.listUser = action.payload
        },
        [createProduct.fulfilled]: (state,action) => {
            state.successCreate = true
        },
        [createProduct.rejected]: (state,action) => {
            state.successCreate = false
        },
        [updateProduct.fulfilled]: (state,action) => {
            state.successUpdate = true
        },
        [saleFigure.fulfilled] : (state,action) => {
            state.sale_figure = action.payload
        } ,  
        [selectSaleDate.fulfilled] : (state,action) => {
            state.list_sale_date = action.payload
        } , 
        [getSalesCategories.fulfilled] : (state,action) => {
            state.sale_cates = action.payload
        }, 
        [selectSalesCate.fulfilled] : (state,action) => {
            state.sale_cates = action.payload
        }, 
        [getSummarySaleFigure.fulfilled] : (state,action) => {
            state.sum_sales = action.payload
        },
        [selectSumSales.fulfilled] : (state,action) => {
            state.sum_sales = action.payload
        },
        
    }
})

export const { resetActionAdmin } = adminSlice.actions
export default adminSlice.reducer