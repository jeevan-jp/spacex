import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('check title of the document', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Launch Date/i);
  expect(linkElement).toBeInTheDocument();
});
