
import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import api from '../../api/api'

const initialState = {
    url_create: ""
}

export const createPayment = createAsyncThunk("payment/create", 
                async (data,thunkAPI) => {

                    const ret = await api.post('/api/v1/create-payment',data)

                    return ret.data.vnpUrl

                })



const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers:{},
    extraReducers: {
        [createPayment.fulfilled]: (state,action) => {
            state.url_create = action.payload
        }
    }


})

const { } = paymentSlice.actions
export default paymentSlice.reducer