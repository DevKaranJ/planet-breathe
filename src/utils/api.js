import axios from 'axios';
import pLimit from 'p-limit';

const limit = pLimit(5);

const API_KEY = 'TjRFwBPIngDfqC6yB1xBcsY61HwrdcWk';
const BASE_URL = 'https://financialmodelingprep.com/api/v3';

export const fetchStockData = async (symbol) => {
  try {
    const response = await limit(() => axios.get(`${BASE_URL}/search?query=${symbol}&limit=50&exchange=NASDAQ&apikey=${API_KEY}`));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCompanyProfile = async (symbol) => {
  try {
    const response = await limit(() => axios.get(`${BASE_URL}/profile/${symbol}?apikey=${API_KEY}`));
    return response.data[0];
  } catch (error) {
    throw error;
  }
};
