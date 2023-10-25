import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStockDetail } from '../../redux/stockData/stockDataSlice';

const StockDetail = () => {
  const { symbol } = useParams(); // Get the symbol parameter from the URL
  const stockData = useSelector((state) => state.stockData);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the stock details when the component mounts
    dispatch(fetchStockDetail(symbol));
  }, [dispatch, symbol]);

  if (stockData.loading) {
    return <div>Loading...</div>;
  }

  if (stockData.error) {
    return <div>Error: {stockData.error.message}</div>;
  }

  return (
    <div>
      <h2>Stock Detail</h2>
      <p>Symbol: {stockData.data.symbol}</p>
      <p>Name: {stockData.data.companyName}</p>
      <p>Market Cap: {stockData.data.marketCap}</p>
      <p>Sector: {stockData.data.sector}</p>
      <p>Industry: {stockData.data.industry}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default StockDetail;
