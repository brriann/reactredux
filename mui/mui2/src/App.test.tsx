import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App with dummy assert', () => {
  render(<App />);
  expect(1).toBe(1);
});
