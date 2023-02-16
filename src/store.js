import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productSlice from './redux/Product/productSlice'
import userSlice from './redux/User/userSlice'
import provinceVNSlice from './redux/ProvinceVN/provinceVNSlice'


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartSlice from './redux/Cart/cartSlice'
import adminSlice from './redux/Admin/adminSlice'
import categorySlice from './redux/Category/categorySlice'
import orderSlice from './redux/Order/orderSlice'
import addressSlice from './redux/address/addressSlice'


  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['user','userDetail','currentUser','accessToken','emailOtp','myOrders']
}

const orderPersistConfig = {
  key: 'order',
  storage,
  whitelist: ['listOrder']
}

const rootReducer = combineReducers({
    product: productSlice,
    user: persistReducer(userPersistConfig,userSlice),
    province: provinceVNSlice,
    cart: cartSlice,
    admin: adminSlice,
    category: categorySlice,
    order: persistReducer(orderPersistConfig,orderSlice),
    address: addressSlice

  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)


// const store = configureStore({
//   reducer:{
//     product: productSlice,
//         user: userSlice,
//         province: provinceVNSlice,
//         admin: adminSlice
//   }
// })

// export default store
