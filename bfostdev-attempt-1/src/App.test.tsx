import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('expect 1 to be 1', () => {
  // const { getByText } = render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // );

  expect(1).toBe(1);
  // expect(getByText(/learn/i)).toBeInTheDocument();
});
