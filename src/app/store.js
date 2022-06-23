import { configureStore } from '@reduxjs/toolkit';
import AnimalsReducer from '../features/AnimalsSlice'

export const store = configureStore({
  reducer: {
    Animals: AnimalsReducer
  },
});
