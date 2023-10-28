import React, { useState } from 'react';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types'; // Import PropTypes

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <Input
        placeholder="Search by symbol..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Define prop type for onSearch
};

export default SearchBar;
