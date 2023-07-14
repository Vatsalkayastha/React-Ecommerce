import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product-List/productlistslice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer
  },
});
