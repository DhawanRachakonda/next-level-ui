import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

const testData = [
  { link: '/home', label: 'Home' },
  { link: '/home', label: 'View' },
  { link: '', label: 'Item' },
];

test('renders breadcrumb component', () => {
  const { getByTestId } = render(<Breadcrumbs navLinks={testData} />);
  const breadcrumbs = getByTestId('bread-crumbs');
  expect(breadcrumbs).toBeInTheDocument();
});
