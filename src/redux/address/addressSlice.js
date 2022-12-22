import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api'

const initialState = {
    listAddress: null,
    addressCurrent: null
}


// get addresses
export const getAddress = createAsyncThunk('address',
        async(id, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                const res = await api.get('/api/v1/address',config)

                return res.data.address
            

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get address')
            }
        }
)

// update default addresses
export const updateDefaultAddress = createAsyncThunk('address/update',
        async(data, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                const res = await api.put(`/api/v1/address/update`,data,config)

                thunkAPI.dispatch(getAddress())
                
                return res.data.address
            

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get address')
            }
        }
)

// add address
export const addAddress = createAsyncThunk('address/add',
        async(data, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

           

                const res = await api.post(`/api/v1/address/add`,data,config)

                thunkAPI.dispatch(getAddress())
                
                return res.data.address
            

            } catch (error) {
                return thunkAPI.rejectWithValue('Cant get address')
            }
        }
)

// get address
export const getSelectedAddress = createAsyncThunk('address/selected',
        async(id, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                const res = await api.get(`/api/v1/address/${id}`,config)
                return res.data.address
                

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get address')
            }
        }
)

const addressSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: {
        [getAddress.fulfilled] : (state,action) => {
            state.listAddress = action.payload
        },
        [getSelectedAddress.fulfilled] : (state,action) => {
            state.addressCurrent = action.payload
        }
    }
})

export default addressSlice.reducer