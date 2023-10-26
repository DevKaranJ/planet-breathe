import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCompanyProfile } from '../../redux/stockData/stockApi';

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
    <div>
      <h2>Company Profile</h2>
      <p>Symbol: {companyProfile.symbol}</p>
      <p>Name: {companyProfile.companyName}</p>
      <p>Price: {companyProfile.price}</p>
      <p>Beta: {companyProfile.beta}</p>
      <p>Market Capitalization: {companyProfile.mktCap}</p>
      <p>Description: {companyProfile.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default StockDetail;
