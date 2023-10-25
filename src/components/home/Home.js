import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../redux/stockData/stockDataSlice';
import { fetchStockData } from '../../redux/stockData/stockApi';
import './home.scss';
import { Button } from 'antd'; // Import the Button component from Ant Design
import { RightOutlined } from '@ant-design/icons';

const Home = () => {
  const stockData = useSelector((state) => state.stockData);
  const dispatch = useDispatch();

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

  return (
    <div className="companyContainer"> { }
      {stockData.loading && <p className="loading">Loading...</p>}
      {stockData.error && <p className="error">Error: {stockData.error.message}</p>}
      {stockData.data && stockData.data.map((item, index) => (
  <div className="company-card" key={index}>
    <ul>
      <li>{item.name}</li>
      <li>{item.symbol}</li>
      <li>{item.price}</li>
    </ul>
    <Button type="primary" icon={<RightOutlined />}>View Details</Button>
  </div>
))}

      ))}
    </div>
  );
};

export default Home;
