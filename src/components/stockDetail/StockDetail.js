import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCompanyProfile } from '../../redux/stockData/stockApi';
import './StockDetail.scss'; // Import the SCSS file

const StockDetail = () => {
  const { symbol } = useParams();
  const [companyProfile, setCompanyProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the company profile data when the component mounts
    fetchCompanyProfile(symbol)
      .then((data) => {
        setCompanyProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [symbol]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="stock-detail-container">
      <h2 className="stock-detail-heading">Company Profile</h2>
      <div className="stock-detail-item">
        <p>Symbol: {companyProfile.symbol}</p>
      </div>
      <div className="stock-detail-item">
        <p>Name: {companyProfile.companyName}</p>
      </div>
      <div className="stock-detail-item">
        <p>Price: {companyProfile.price}</p>
      </div>
      <div className="stock-detail-item">
        <p>Beta: {companyProfile.beta}</p>
      </div>
      <div className="stock-detail-item">
        <p>Market Capitalization: {companyProfile.mktCap}</p>
      </div>
      <div className="stock-detail-item">
        <p className="stock-detail-description">Description: {companyProfile.description}</p>
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default StockDetail;
