import React from 'react';

import { render } from 'tests/TestUtils';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Sign Up/i);
  expect(linkElement).toBeInTheDocument();
});
