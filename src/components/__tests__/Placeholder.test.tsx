import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Placeholder from '../Placeholder';
import { expectToBeInDocument, expectToHaveTextContent } from './test-utils';

test('renders the placeholder component correctly', () => {
  render(<Placeholder />);
  const placeholderElement = screen.getByTestId('placeholder');

  // Use typed utility functions
  expectToBeInDocument(placeholderElement);
  expectToHaveTextContent(placeholderElement, 'Hello, Clarity Queue!');
});
