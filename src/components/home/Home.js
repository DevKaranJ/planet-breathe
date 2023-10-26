import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../redux/stockData/stockDataSlice';
import { fetchStockData } from '../../redux/stockData/stockApi';
import './home.scss';
import { Button, Input } from 'antd';
import { RightOutlined } from '@ant-design/icons';

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
  }, []);

  useEffect(() => {
    if (stockData.data) {
      const filtered = stockData.data.filter((item) =>
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
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
      {filteredData.map((item, index) => (
        <div className={`company-card ${darkMode ? 'dark' : ''}`} key={index}>
          <ul className="company-info">
            <li className="symbol">{item.symbol}</li>
            <li className="name">{item.name}</li>
            <li className="exchange">{item.exchangeShortName}</li>
          </ul>
          <div className="button-container">
            <Link to={`/stock/${item.symbol}`}>
              <Button type="text" icon={<RightOutlined />} className="view-details-button">
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
