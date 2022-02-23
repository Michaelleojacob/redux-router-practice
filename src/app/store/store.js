import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../slices/counterSlice';
import shopReducer from '../slices/shop';

export default configureStore({
  reducer: {
    counter: countReducer,
    shop: shopReducer,
  },
});
