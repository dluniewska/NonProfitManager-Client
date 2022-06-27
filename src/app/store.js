import { configureStore } from '@reduxjs/toolkit';
import AnimalsReducer from '../features/AnimalsSlice'
import TransportsReducer from '../features/TransportsSlice';

export const store = configureStore({
  reducer: {
    Animals: AnimalsReducer,
    Transports: TransportsReducer
  },
});
