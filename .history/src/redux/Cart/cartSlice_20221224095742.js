import axios from "axios";
import api from '../../api/api'

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
  isFetching: false,
  listCartUser:null,
}

export const addCart = createAsyncThunk('cart/add',
            async(data,thunkAPI) =>{

                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                try{

                        const res = await api.post('/api/v1/cart/add',data,config)
                      
                        thunkAPI.dispatch(getCartUser())

                        return res.data

                }
                catch(e)
                {

                }
            })

// get list cart user
export const getCartUser  = createAsyncThunk('cart/get', 
            async(data, thunkAPI) => {
        
            const token = localStorage.getItem('token')
            const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

        try{
            const res = await api.get('/api/v1/cart/getCartUser', config)

            return res.data.cart
        } 
        catch(err){

        }
})

// delete cart
export const deleteCart = createAsyncThunk('cart/delete',
            async(id,thunkAPI) =>{

                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                try{

                        const res = await api.put(`/api/v1/cart/${id}`,{},config)

                        thunkAPI.dispatch(getCartUser())

                        return res.data

                }
                catch(e)
                {

                }
            })

    
// increase item in cart
export const increaseQuantity = createAsyncThunk('cart/delete',
            async(id,thunkAPI) =>{

                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                try{

                        const res = await api.put(`/api/v1/cart/increase/${id}`,{},config)
                        thunkAPI.dispatch(getCartUser())

                        return res.data

                }
                catch(e)
                {

                }
            })


// decrease item in cart
export const decreaseQuantity = createAsyncThunk('cart/delete',
            async(id,thunkAPI) =>{

                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                try{

                        const res = await api.put(`/api/v1/cart/decrease/${id}`,{},config)
                        thunkAPI.dispatch(getCartUser())

                        return res.data

                }
                catch(e)
                {

                }
            })
            
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        resetCart: (state,action) => {
            state.listCartUser = null
        }
    },
    extraReducers:{
        [getCartUser.fulfilled] : (state,action) =>{
            state.listCartUser = action.payload
        }
    }
})

export default cartSlice.reducer