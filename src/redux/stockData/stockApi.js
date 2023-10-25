import axios from 'axios';

const API_KEY = 'TjRFwBPIngDfqC6yB1xBcsY61HwrdcWk';

const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(
      // putting limit to 5 for now 
      `https://financialmodelingprep.com/api/v3/search?query=AA&limit=50&exchange=NASDAQ&apikey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchStockData };
