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
    blacklist: ['user','cart','order','admin']
  }

const userPersistConfig = {
  key: 'user',
  storage: storage,
  blacklist: ['success','loading','successRegister','successLogin','message','errorRegister','errorResetPassword','successSendOTP','successResetPassword', 'successUpdate','successUpdatePassword','errorUpdatePassword','errorLogin']
}

const cartPersistConfig = {
  key: 'cart',
  storage,
  blacklist: ['success']
}

const orderPersistConfig = {
  key: 'order',
  storage: storage,
  blacklist: ['successOrder', 'successReview', 'successUpdateOrder']

}

const adminPersistConfig = {
  key: 'admin',
  storage,
  blacklist: ['successCreate','successUpdate','sale_figure','sale_cates']
}

const productPersistConfig = {
  key: 'product',
  storage,
  
}

const rootReducer = combineReducers({
    product: persistReducer(productPersistConfig,productSlice),
    user: persistReducer(userPersistConfig,userSlice),
    order: persistReducer(orderPersistConfig,orderSlice),
    province: provinceVNSlice,
    cart: persistReducer(cartPersistConfig,cartSlice),
    admin: persistReducer(adminPersistConfig,adminSlice),
    category: categorySlice,
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
