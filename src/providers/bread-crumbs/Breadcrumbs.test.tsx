import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

const testData = [
  { link: '/home', label: 'Home' },
  { link: '/view', label: 'View' },
  { link: '', label: 'Item' },
];

test('renders breadcrumb component', () => {
  const { getByTestId } = render(<Breadcrumbs navLinks={testData} />);
  const breadcrumbs = getByTestId('bread-crumbs');
  expect(breadcrumbs).toBeInTheDocument();
});

test('render home link with in breadcrumb component', () => {
  const { getByText } = render(<Breadcrumbs navLinks={testData} />);
  const homeLink = getByText(testData[0].label);
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.href).toBe('http://localhost/home');
});

test('render Item text with in breadcrumb component', () => {
  const { getByText } = render(<Breadcrumbs navLinks={testData} />);
  const navText = getByText(testData[2].label);
  expect(navText).toBeInTheDocument();
});
