// stockDataSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStockData, fetchCompanyProfile } from './stockApi'; // Adjust the import path

// Create an async thunk to fetch stock data
export const fetchStockDataAsync = createAsyncThunk('stockData/fetchStockData', async (symbol) => {
  const response = await fetchStockData(symbol);
  return response;
});

export const fetchCompanyProfileAsync = createAsyncThunk('stockData/fetchCompanyProfile', async (symbol) => {
  const response = await fetchCompanyProfile(symbol);
  return response;
});

const stockDataSlice = createSlice({
  name: 'stockData',
  initialState: {
    data: null,
    loading: 'idle', // 'idle' indicates no ongoing request
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockDataAsync.pending, (state) => {
        state.loading = 'pending'; // Set loading state to 'pending'
        state.error = null;
      })
      .addCase(fetchStockDataAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = 'succeeded'; // Set loading state to 'succeeded'
        state.error = null;
      })
      .addCase(fetchStockDataAsync.rejected, (state, action) => {
        state.loading = 'failed'; // Set loading state to 'failed'
        state.error = action.error.message;
      })
      .addCase(fetchCompanyProfileAsync.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchCompanyProfileAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(fetchCompanyProfileAsync.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectStockData = (state) => state.stockData.data;
export const selectLoading = (state) => state.stockData.loading;
export const selectError = (state) => state.stockData.error;

export default stockDataSlice.reducer;
