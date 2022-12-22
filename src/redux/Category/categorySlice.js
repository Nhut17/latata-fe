import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/api";


const initialState = {
    listCate: [],
    loading: false,
 
}

// Get All Categories
export const getCate = createAsyncThunk('cate/getCate' , 
        async(data,thunkAPI) => {
            try{
                const res = await api.get('/api/v1/categories') 

                return res.data
            }
            catch (e){
                return thunkAPI.rejectWithValue('Error with get category API')
            }
})

export const createProduct = createAsyncThunk('cate/createCate',
    async(data,thunkAPI) => {
        try{

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const res = await api.post(`/api/v1/category/create`,data,config)

            // thunkAPI.dispatch(getProduct())
            
            return res.data
    
        }
        catch(e){
            return thunkAPI.rejectWithValue('Error when create category API')
        }
})


const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: {
        [getCate.pending]: (state,action) => {
            state.loading = true
        },
        [getCate.fulfilled]: (state,action) => {
            state.loading = false;
            state.listCate = action.payload
        },
        [getCate.rejected]: (state,action) => {

        },
        
    }

})

export default categorySlice.reducer;