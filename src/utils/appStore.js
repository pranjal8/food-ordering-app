import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './createSlice'

const appStore = configureStore({
    reducer:{
        cart: cartReducer
    }
})

export default appStore;