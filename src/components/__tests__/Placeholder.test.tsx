import React from 'react';
import { render, screen } from '@testing-library/react';
import Placeholder from '../Placeholder';

test('renders the placeholder component correctly', () => {
  render(<Placeholder />);
  const placeholderElement = screen.getByTestId('placeholder');
  expect(placeholderElement).toBeInTheDocument();
  expect(placeholderElement).toHaveTextContent('Hello, Clarity Queue!');
});
