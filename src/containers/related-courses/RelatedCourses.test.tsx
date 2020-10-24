import React from 'react';
import { render } from '@testing-library/react';
import RelatedCourses from './RelatedCourses';

const testData = [
  {
    imgUrl: 'http://localhost:3000/assets/images/medical-abortion-2x_dw.png',
    courseName: 'Comprehisive course 1',
    author: 'Dr. ashok chak',
  },
  {
    imgUrl: 'http://localhost:3000/assets/images/medical-abortion-2x_dw.png',
    courseName: 'Comprehisive course 2',
    author: 'Dr. ashok chakr',
  },
  {
    imgUrl: 'http://localhost:3000/assets/images/medical-abortion-2x_dw.png',
    courseName: 'Comprehisive course 3',
    author: 'Dr. ashok ckra',
  },
];

test('renders related courses component', () => {
  const { getByTestId } = render(<RelatedCourses courses={testData} />);
  const relatedCourseComponent = getByTestId('related-courses');
  expect(relatedCourseComponent).toBeInTheDocument();
});

test('render course and author in related courses component', () => {
  const { getByText } = render(<RelatedCourses courses={testData} />);
  const firstCourseName = getByText(testData[0].courseName);
  const firstCourseAuthor = getByText(testData[0].author);
  expect(firstCourseName).toBeInTheDocument();
  expect(firstCourseAuthor).toBeInTheDocument();
});
