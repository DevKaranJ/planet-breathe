import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('should call the onSearch function when the search button is clicked', () => {
    const onSearch = jest.fn();
    const { getByText, getByPlaceholderText } = render(<SearchBar onSearch={onSearch} />);

    const searchInput = getByPlaceholderText('Search by symbol...');
    const searchButton = getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'AAPL' } });
    fireEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith('AAPL');
  });
});
