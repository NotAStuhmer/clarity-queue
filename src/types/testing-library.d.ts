import '@testing-library/jest-dom';

declare global {
  // Extends the global expect function to include jest-dom matchers
  namespace jest {
    // Extends matchers
    interface Expect {
      toBeInTheDocument(): any;
      toHaveTextContent(content: string | RegExp): any;
    }

    // Extends actual matchers
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveTextContent(content: string | RegExp): R;
    }
  }
}

export {};
