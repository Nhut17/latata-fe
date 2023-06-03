import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from '../../api/api'
import { getProduct } from "../Product/productSlice";


const initialState = {
    listUser: [],
    sale_figure: [],
    list_sale_date: [],
    sale_cates_month: [],
    sale_cates_year: [],
    sum_sales: [],
    successCreate: false,
    successUpdate: false,
    errorChartCol: '',
    successUploadBrand: false,
    listBrand: [],
    vouchers: [],
    successAdd: false,
    errorAdd: false,
    images: [],
    successAddEventBanner: false,
    list_year_sale: [],
    successSendVoucher: false,
    eventBanner : [],
    useVoucher: null,
    useVoucherSuccessfull: false
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
export const getSalesCategoriesYear = createAsyncThunk('sale-category/year',
                async (data,thunkAPI) => {

                    const ret = await api.post('/api/v1/sales-cate-year',{
                        year: data
                    })
                    

                    return ret.data.sales_cates_year
                })

// select sales category
export const getSalesCategoriesMonth = createAsyncThunk('sale-category/month',
                async (data, thunkAPI) => {

                  

                    const ret = await api.post('/api/v1/sales-cate-month', data)

                    return ret.data.sale_cates

                })


// upload logo brand
export const uploadLogo = createAsyncThunk('brand/upload',
                async (data,thunkAPI) => {

                    const ret = await api.post('/api/v1/brand/add',data)

                    return ret.data

                })

// get brand logo
export const getBrand = createAsyncThunk('brand/get',
                async (data,thunkAPI) => {

                    const ret = await api.get('api/v1/brand')
                    
                    return ret.data.brand
                })

// delete brand logo
export const deleteBrand = createAsyncThunk('brand/delete',
                async (id,thunkAPI) => {

                    const ret = await api.delete(`api/v1/brand/${id}`)

                    return ret.data

                } )

// update brand
export const updateBrand = createAsyncThunk('brand/update',
                async (data,thunkAPI) => {

                    const ret = await api.put('/api/v1/brand')

                })


// get vouchers
export const getVouchers = createAsyncThunk('voucher/get',
                async (data,thunkAPI) => {

                    const ret = await api.get('/api/v1/voucher')

                    return ret.data.voucher
                })

// add voucher
export const addVoucher = createAsyncThunk('voucher/add',
                async (data,thunkAPI) =>{

                    const ret = await api.post('/api/v1/voucher/add',data)

                    thunkAPI.dispatch(getVouchers())
                    return ret.data

                })


// send voucher 
export const sendVoucher = createAsyncThunk('voucher/send',
            async (data,thunkAPI) => {
                
                const ret = await api.post('/api/v1/voucher/send-all',data)

                return ret.data

            })

// delete voucher
export const deleteVoucher = createAsyncThunk('voucher/delete', 
                async (id,thunkAPI) => {

                    const ret = await api.delete(`/api/v1/voucher/${id}`)


                    thunkAPI.dispatch(getVouchers())
                    return ret.data
                })

// add event banner
export const addEventBanner = createAsyncThunk('event-banner', 
                async (data,thunkAPI) => {

                    const token = localStorage.getItem('token')
                            const config = {
                                headers: {
                                    Authorization: 'Bearer ' + token,
                                
                                }
                            }
                        
                    const ret = await api.post('/api/v1/event-banner/create',data,config)

                    thunkAPI.dispatch(getAllEventBanner())

                    return ret.data

                })
// get one event banner
export const getOneEventBanner = createAsyncThunk('event-banner/getOne',
                async (data,thunkAPI) => {

                    const ret = await api.get('/api/v1/event-banner/get-one')

                    return ret.data


                })

// get all banner
export const getAllEventBanner = createAsyncThunk('event-banner',
                async (data,thunkAPI) => {

                    const ret = await api.get('/api/v1/event-banner')

                    return ret.data.event_banner
                })

// get list year summary sales
export const getListYearSummary = createAsyncThunk('sumSales/list-year',
                    async (data,thunkAI) => {

                        const ret = await api.get('/api/v1/list-year-sales')

                        return ret.data.list_year

                    } )

// use voucher
export const useVoucher = createAsyncThunk('voucher/use',
                    async (data,thunkAPI) => {

                        const ret = await api.post('/api/v1/use-voucher',data)

                        return ret.data
                    })


const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers:{
        resetActionAdmin: (state,action) => {
            state.successCreate = false
            state.successUpdate = false
        },
        messageErrorPickDateChartCol: (state,action) => {
            
            state.errorChartCol = action.payload
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
        [getSalesCategoriesYear.fulfilled] : (state,action) => {
            state.sale_cates_year = action.payload
        }, 
        [getSalesCategoriesMonth.fulfilled] : (state,action) => {
            state.sale_cates_month = action.payload
        }, 
        [getSummarySaleFigure.fulfilled] : (state,action) => {
            state.sum_sales = action.payload
        },
        [selectSumSales.fulfilled] : (state,action) => {
            state.sum_sales = action.payload
        },
        [uploadLogo.fulfilled] : (state,action) => {
            state.successUploadBrand = true
        }, 
        [uploadLogo.rejected] : (state,action) => {
        }, 
        [getBrand.fulfilled] : (state,action) => {
            state.listBrand = action.payload
        }, 
        [getVouchers.fulfilled] : (state,action) => {
            state.vouchers = action.payload
        }, 
        [addVoucher.fulfilled] : (state,action) => {
            state.successAdd = true
        }, 
        [addVoucher.rejected] : (state,action) => {
            state.errorAdd = true
        }, 
        [addEventBanner.fulfilled] : (state,action) => {
            state.successAddEventBanner = true
        }, 
        [getListYearSummary.fulfilled] : (state,action) => {
            state.list_year_sale = action.payload
        }, 
        [sendVoucher.fulfilled] : (state,action) => {
            state.successSendVoucher = true
        }, 
        [getAllEventBanner.fulfilled] : (state,action) => {
            state.eventBanner = action.payload
        }, 
        [useVoucher.fulfilled] : (state,action) => {
            state.useVoucherSuccessfull = true
            state.useVoucherSuccessfull=action.payload

        }, 
        
        
    }
})



export const { resetActionAdmin, messageErrorPickDateChartCol } = adminSlice.actions
export default adminSlice.reducer