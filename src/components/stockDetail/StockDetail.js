import React from 'react';

const StockDetail = ({ stockData }) => {
  return (
    <div>
      <h2>Stock Detail</h2>
      <p>Symbol: {stockData.symbol}</p>
      <p>Name: {stockData.name}</p>
      <p>Exchange: {stockData.exchangeShortName}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default StockDetail;
