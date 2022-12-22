import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from '../../api/api'
import { getProduct } from "../Product/productSlice";


const initialState = {
    listUser: [],
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
    }
})

export const { resetActionAdmin } = adminSlice.actions
export default adminSlice.reducer