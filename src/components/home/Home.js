import React, { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../redux/stockData/stockDataSlice';
import { fetchStockData } from '../../redux/stockData/stockApi';
import './home.scss';

const Home = ({ darkMode, toggleDarkMode }) => {
  const stockData = useSelector((state) => state.stockData);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleFetchData = async () => {
    dispatch(fetchDataStart());

    try {
      const data = await fetchStockData();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  useEffect(() => {
    if (stockData.data) {
      const filtered = stockData.data.filter((item) => item.symbol.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredData(filtered);
    }
  }, [searchQuery, stockData.data]);

  return (
    <div className="stockContainer">
      <div className="search-bar">
        <Input
          placeholder="Search by symbol..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={`companyContainer ${darkMode ? 'dark' : ''}`}>
        {filteredData.map((item) => (
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
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Home;
