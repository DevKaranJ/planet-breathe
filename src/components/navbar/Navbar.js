import React from 'react';
import { Layout, Switch } from 'antd';
import { BellOutlined, SettingOutlined } from '@ant-design/icons';
import './Navbar.scss';

const { Header } = Layout;

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <Header className="navbar">
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
        <BellOutlined className="notification-icon" /> {/* Notification Icon */}
        <SettingOutlined className="settings-icon" /> {/* Settings Icon */}
      </div>
    </Header>
  );
};

export default Navbar;
