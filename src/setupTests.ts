// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import { render } from 'tests/TestUtils';

global.generateSnapshot = (Component: JSX.Element) => {
  const { container } = render(Component);
  expect(container).toMatchSnapshot();
};
console.log(generateSnapshot);
