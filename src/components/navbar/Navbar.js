import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Layout, Switch } from 'antd';
import { BellOutlined, SettingOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './Navbar.scss';

const { Header } = Layout;

const Navbar = ({ darkMode, toggleDarkMode }) => (
  <Header className="navbar">
    <div className="left-menu">
      <ArrowLeftOutlined className="back-arrow-icon" onClick={() => window.history.back()} />
    </div>
    <div className="logo">
      <h1>Stock Screener</h1>
    </div>
    <div className="right-menu">
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <BellOutlined className="notification-icon" />
      {' '}
      {/* Notification Icon */}
      <SettingOutlined className="settings-icon" />
      {' '}
      {/* Settings Icon */}
    </div>
  </Header>
);

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired, // Validate the darkMode prop
  toggleDarkMode: PropTypes.func.isRequired, // Validate the toggleDarkMode prop
};

export default Navbar;
