import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import pizza from './slices/pizzasSlice';
import sort from './slices/filterSlice';
import pagination from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter,
    sort,
    pagination,
    cart,
    pizza,
  },
})
