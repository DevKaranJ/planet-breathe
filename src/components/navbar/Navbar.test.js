import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('Navbar component renders without errors', () => {
  const { container } = render(<Navbar darkMode toggleDarkMode={() => {}} />);
  expect(container).toBeTruthy();
});
