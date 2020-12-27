import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import * as serviceWorker from './serviceWorker';

const BUILD_TARGETS = [
  {
    name: 'nextlevel_courses_module',
    path: './App',
  },
  {
    name: 'nextlevel_streaming_module',
    path: './nextlevel-stream-module',
  },
];

// Determine which entry point to import
const { path } = BUILD_TARGETS.find(
  ({ name }) => process.env.REACT_APP_BUILD_TARGET === name,
)!;

// Import the entry point and render it's default export
import(`${path}`).then(({ default: BuildTarget }) =>
  ReactDOM.render(
    <React.StrictMode>
      <BuildTarget />
    </React.StrictMode>,
    document.getElementById('root'),
  ),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
