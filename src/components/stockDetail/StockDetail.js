// StockDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanyProfileAsync, selectStockData, selectLoading, selectError } from '../../redux/stockData/stockDataSlice';
import './StockDetail.scss';

const StockDetail = () => {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const companyProfile = useSelector(selectStockData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  React.useEffect(() => {
    dispatch(fetchCompanyProfileAsync(symbol)); // Dispatch the async action
  }, [dispatch, symbol]);

  if (loading === 'pending') {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error}
      </div>
    );
  }

  if (!companyProfile) {
    return null; // Handle the case when companyProfile is not available
  }

  return (
    <div className="stock-detail-container">
      <h2 className="stock-detail-heading">Company Profile</h2>
      <div className="stock-detail-item">
        <p>
          Symbol: {companyProfile.symbol}
        </p>
      </div>
      <div className="stock-detail-item">
        <p>
          Name: {companyProfile.companyName}
        </p>
      </div>
      <div className="stock-detail-item">
        <p>
          Price: {companyProfile.price}
        </p>
      </div>
      <div className="stock-detail-item">
        <p>
          Beta: {companyProfile.beta}
        </p>
      </div>
      <div className="stock-detail-item">
        <p>
          Market Capitalization: {companyProfile.mktCap}
        </p>
      </div>
      <div className="stock-detail-item">
        <p className="stock-detail-description">
          Description: {companyProfile.description}
        </p>
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default StockDetail;
