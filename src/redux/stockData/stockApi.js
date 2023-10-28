import axios from 'axios';

const API_KEY = 'GWcRjXwFAkawQmMRp731C7z5Yr45Hf3S';

const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/search?query=AA&limit=50&exchange=NASDAQ&apikey=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchCompanyProfile = async (symbol) => {
  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${API_KEY}`,
    );
    return response.data[0]; // Extract the first item from the response
  } catch (error) {
    throw error;
  }
};

export { fetchStockData, fetchCompanyProfile };
