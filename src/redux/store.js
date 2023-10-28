import { configureStore } from '@reduxjs/toolkit';
import stockDataReducer from './stockData/stockDataSlice'; // Adjust the import path

const store = configureStore({
  reducer: {
    stockData: stockDataReducer,
  },
});

export default store;
