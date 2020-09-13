import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('check title of the document', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/from 2006/i);
  expect(linkElement).toBeInTheDocument();
});
