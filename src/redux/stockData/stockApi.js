import axios from 'axios';

const API_KEY = 'TjRFwBPIngDfqC6yB1xBcsY61HwrdcWk';

const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/stock/list?apikey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchStockData };
