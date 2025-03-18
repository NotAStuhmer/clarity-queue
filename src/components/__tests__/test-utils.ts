import { screen } from '@testing-library/react';

// Create typed wrapper functions for the missing Jest-DOM matchers
export const expectToBeInDocument = (element: HTMLElement) => {
  // Type assertion only at this one location
  return (expect(element) as any).toBeInTheDocument();
};

export const expectToHaveTextContent = (
  element: HTMLElement,
  text: string | RegExp
) => {
  // Type assertion only at this one location
  return (expect(element) as any).toHaveTextContent(text);
};
