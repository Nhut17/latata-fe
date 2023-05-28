import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/api";


const initialState = {
    listCate: [],
    loading: false,
    info_tech: null,
    successAddInfoTech: false,
    errorAddInfoTech: '',
    errInfoTech: false,
    
 
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


// get info tech
export const getInfoTech = createAsyncThunk('info-tech/get',
                async (id,thunkAPI) => {

                    const ret = await api.get(`/api/v1/info-tech/${id}`)

                    return ret.data.info_tech

                })

// add info tech
export const addInfoTech = createAsyncThunk('info-tech/add',
                async (data,thunkAPI) => {

                    const ret = await api.post(`/api/v1/info-tech/add`,data)

                    return ret.data

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
        [addInfoTech.fulfilled] : (state,action) => {
            state.successAddInfoTech = true
        },
        [addInfoTech.rejected]: (state,action) =>{
            state.errorAddInfoTech = 'Thông tin kỹ thuật đã tồn tại!'
        },
        [getInfoTech.fulfilled] : (state,action) => {
            state.info_tech = action.payload
             state.loading = false
        },
        [getInfoTech.rejected] : (state,action) => {
            state.info_tech = null
            state.loading = false
        },
        [getInfoTech.pending] : (state,action) => {
            state.loading = true
        },
        
    }

})

export default categorySlice.reducer;