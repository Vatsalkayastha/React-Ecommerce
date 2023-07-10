import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product-List/productlistslice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
