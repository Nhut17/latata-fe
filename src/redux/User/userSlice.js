import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../api/api'
import { clearAuthHeader, setAuthHeader } from '../../api/setHeader'

const initialState = {

    user : null,
    success: false,
    loading: false,
    successRegister: false,
    successLogin: false,
    userDetail : {},
    message: null,
    currentUser: null,
    accessToken: null,
    errorRegister: false,
    errorResetPassword: false,
    successSendOTP: false,
    successResetPassword: false,
    emailOtp: null,
    myOrders: null,
    successUpdate: false,
    errorLogin: false,
    successUpdatePassword: false,
    errorUpdatePassword: false,
}




// Register 
export const registerUser = createAsyncThunk('user/register', 
        async(data,thunkAPI) => {

            
            try{
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const res = await api.post('/api/v1/register',data,config)
                
                return res.data
            }
            catch(err){
                return thunkAPI.rejectWithValue(err.message)
            }
        })

// Login
export const loginUser = createAsyncThunk('user/login', 
        async(data,thunkAPI) => {
            try{
                
               
                const res = await api.post('/api/v1/login',data)
                setAuthHeader(res.data.token)
  
                localStorage.setItem('token', res.data.token)

                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('Register Failed!')
            }
        })

// Logout 
export const logoutUser = createAsyncThunk('user/logout', 
        async(data,thunkAPI) => {
            try{
        
                const res = await api.get('/api/v1/logout')
          
                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('logout Failed!')
            }
        })


// detail User
export const getUserDetail = createAsyncThunk('user/userDetail',
        async(id, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                const res = await api.get(`/api/v1/profile`,config)
                
                return res.data.user
                

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get user detail')
            }
        }
)

// get al User
export const getAllUser = createAsyncThunk('user/getAll',
        async(id, thunkAPI) => {
            try {

                const res = await axios.get(`http://localhost:4000/api/v1/admin/user/${id}`)
                
                return res.data.user
                

                // const res = await api.get(`/api/v1/user/${id}`)

                // return res.data

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get user detail')
            }
        }
)


// Forgot password 
export const forgotPassword = createAsyncThunk('password/forgot', 
        async(email,thunkAPI) => {
            try{
                const config = {
                    headers:{
                        "Content-Type": "application/json"
                    }
                }
        
                const res = await api.post('/api/v1/password/forgot',email,config)
          
                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue('logout Failed!')
            }
        })

// Forgot password 
export const resetPassword = createAsyncThunk('password/reset', 
        async(data,thunkAPI) => {
            try{
                const config = {
                    headers:{
                        "Content-Type": "application/json"
                    }
                }
                console.log(data);
                const res = await api.put('/api/v1/password/reset',data,config)
          
                return res.data
            }
            catch(e){
                return thunkAPI.rejectWithValue(e)
            }
        })

// get al User
export const myOrder = createAsyncThunk('user/getAll',
        async(id, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }

                const res = await api.get('/api/v1/orders/me',config)
                
                return res.data.orders
            

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get user detail')
            }
        }
)

// update profile
export const updateProfile = createAsyncThunk('user/update',
        async(data, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }


                const res = await api.put('/api/v1/profile/update',data,config)

                thunkAPI.dispatch(getUserDetail())
                
                return res.data
            

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get user detail')
            }
        }
)



// update password
export const updatePassword = createAsyncThunk('user/password/update',
        async(data, thunkAPI) => {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
                const { password, oldPassword} = data
                const update = {
                    oldPassword,
                    password
                }

                console.log(update)
                const res = await api.put('/api/v1/password/update',update,config)

                
                
                return res.data
            

            } catch (error) {
                return thunkAPI.rejectWithValue('can not get user detail')
            }
        }
)



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetActionUser: (state,action) => {
            state.message =''
            state.successRegister = false
            state.successLogin = false
            state.errorRegister = false
            state.errorLogin = false
            state.errorResetPassword = false
            state.successSendOTP= false
            state.successResetPassword= false
            state.successUpdate = false
            state.successUpdatePassword = false
            state.errorUpdatePassword = false

        },
        sendEmail: (state,action) => {
            state.emailOtp = action.payload
        },
       
    },
    extraReducers: {
        [registerUser.fulfilled]: (state,action) => {
            state.successRegister = true
            state.errorRegister = false
        },
        [registerUser.rejected]: (state,action) => {
            state.message = 'Email đã tồn tại!'
            state.successRegister = false
            state.errorRegister = true
        },
        [loginUser.fulfilled]: (state,action) => {
            state.currentUser = action.payload.user
            state.successLogin = true
            state.accessToken = action.payload.token
            state.errorLogin = false
        },
        [loginUser.rejected]: (state,action) => {
            state.errorLogin = true
        },
        [getUserDetail.fulfilled] : (state, action) => {
            state.currentUser = action.payload

        },
       [logoutUser.fulfilled]: (state,action) => {
            state.currentUser = null
       },
       [forgotPassword.fulfilled] : (state,action) => {
            state.successSendOTP = true
       },
       [resetPassword.fulfilled] : (state,action) => {
            state.successResetPassword = true
            state.errorResetPassword = false
       },
       [resetPassword.rejected] : (state,action) => {
            state.errorResetPassword = true
            state.message = 'Mã OTP nhập không đúng hoặc đã hết hiệu lực'
       },
       [myOrder.fulfilled] : (state,action) => {
           state.myOrders = action.payload
       },
       [myOrder.rejected] : (state,action) => {
            
       },
       [updateProfile.fulfilled] : (state,action) => {
        state.successUpdate = true
    },
       [updatePassword.fulfilled] : (state,action) => {
            state.successUpdatePassword = true
            state.errorUpdatePassword = false
    },
       [updatePassword.rejected] : (state,action) => {
            state.successUpdatePassword = false
            state.errorUpdatePassword = true
    },

    }
})
export const { resetActionUser,sendEmail } = userSlice.actions

export default userSlice.reducer