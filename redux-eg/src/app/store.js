import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger=require('redux-logger')
import cakeReducer from'../features/cake/cakeSlice'
import icecreamReducer from'../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'


const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },
    // middleware:(getDefultMiddleware)=>getDefultMiddleware().concat(logger),

})
export default store