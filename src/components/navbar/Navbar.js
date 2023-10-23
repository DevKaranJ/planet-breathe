import React, { useState } from 'react';
import { Layout, Switch, Input } from 'antd';
import { SearchOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './Navbar.scss'; // Import your SASS file

const { Header } = Layout;

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <Header className="navbar">
      <div className="logo">
        <h1>Stock Screener</h1>
      </div>
      <div className="right-menu">
        <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            allowClear
            style={{ display: isSearchOpen ? 'block' : 'none' }}
          />
        </div>
        <button
          onClick={handleSearchIconClick}
          style={{ visibility: isSearchOpen ? 'hidden' : 'visible' }}
        >
          <SearchOutlined />
        </button>
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <InfoCircleOutlined className="about-icon" />
      </div>
    </Header>
  );
};

export default Navbar;
