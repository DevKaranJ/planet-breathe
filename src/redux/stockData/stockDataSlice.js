import { createSlice } from '@reduxjs/toolkit';
import { fetchStockData } from './stockApi';

const stockDataSlice = createSlice({
  name: 'stockData',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = {
        message: action.payload.message, // Store the error message
        code: action.payload.code,       // Store any other relevant information
      };
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} = stockDataSlice.actions;

// New action to fetch details for a specific stock
export const fetchStockDetail = (symbol) => async (dispatch) => {
  dispatch(fetchDataStart());

  try {
    const response = await fetchStockData(symbol); // Modify fetchStockData to accept a symbol parameter
    dispatch(fetchDataSuccess(response));
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};

export default stockDataSlice.reducer;
