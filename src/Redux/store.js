import { configureStore } from '@reduxjs/toolkit'
import { cartReducer, wishlistReducer } from './cartSlice'
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    wishlist:wishlistReducer
  },
})