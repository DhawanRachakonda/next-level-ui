import React from 'react';
import { render } from '@testing-library/react';
import TopicsList from './TopicsList';

const testData = [
  { heading: 'chapter 1', duration: '03:10:00' },
  { heading: 'chapter 2', duration: '03:30:00' },
];

test('renders topics list component', () => {
  const { getByTestId } = render(<TopicsList topicList={testData} />);
  const topicsList = getByTestId('topics-index');
  expect(topicsList).toBeInTheDocument();
});

test('render heading and duraion in topics list component', () => {
  const { getByText } = render(<TopicsList topicList={testData} />);
  const firstTopicHeading = getByText(testData[0].heading);
  const firstTopicDuraition = getByText(testData[0].duration);
  expect(firstTopicHeading).toBeInTheDocument();
  expect(firstTopicDuraition).toBeInTheDocument();
});
