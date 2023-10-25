const fetchStockData = async (symbol) => {
    try {
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/search?query=${symbol}&limit=1&apikey=${API_KEY}`
      );
      return response.data[0]; // Assuming you only want to fetch details for a single stock
    } catch (error) {
      throw error;
    }
  };
  