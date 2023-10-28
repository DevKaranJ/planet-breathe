import React, { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStockDataAsync,
  selectStockData,
  selectLoading,
  selectError,
} from '../../redux/stockData/stockDataSlice';
import './home.scss';

const API_CALLS_LIMIT = 250; // Set your daily API call limit

const Home = ({ darkMode, toggleDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [apiCallsCount, setApiCallsCount] = useState(0);

  const dispatch = useDispatch();
  const stockData = useSelector(selectStockData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleFetchData = async () => {
    if (apiCallsCount >= API_CALLS_LIMIT) {
      // Notify the user that the API limit has been reached
      alert('API call limit for the day has been reached.');
      return;
    }

    dispatch(fetchStockDataAsync(searchQuery));

    // Increment the API call count
    setApiCallsCount(apiCallsCount + 1);
  };

  useEffect(() => {
    // Fetch initial data when the component loads
    handleFetchData();
  }, []);

  return (
    <div className="stockContainer">
      <div className="search-bar">
        <Input
          placeholder="Search by symbol..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={handleFetchData}>Search</Button>
      </div>
      <div className={`companyContainer ${darkMode ? 'dark' : ''}`}>
        {loading === 'pending' && <div>Loading...</div>}
        {error && (
        <div>
          Error:
          {error}
        </div>
        )}
        {loading === 'succeeded' && Array.isArray(stockData) && stockData.length > 0 ? (
        // Display the data here
          stockData.map((item) => (
            <div className={`company-card ${darkMode ? 'dark' : ''}`} key={item.symbol}>
              <ul className="company-info">
                <li className="symbol">{item.symbol}</li>
                <li className="name">{item.name}</li>
                <li className="exchange">{item.exchangeShortName}</li>
              </ul>
              <div className="button-container">
                <Link to={`/stock/${item.symbol}`}>
                  <Button type="text" icon={<RightOutlined />} className="view-details-button" />
                </Link>
              </div>
            </div>
          ))
        ) : (
        // Handle the case when stockData is not an array or is empty
          <div>No stock data available.</div>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Home;
