// import '@testing-library/jest-dom';

// declare global {
//   namespace jest {
//     interface Matchers<R> {
//       toBeInTheDocument(): R;
//       toHaveTextContent(text: string | RegExp): R;
//     }
//   }
// }

// src/types/jest-dom.d.ts
/// <reference types="@testing-library/jest-dom" />

declare namespace jest {
  interface Expect {
    toBeInTheDocument(): any;
    toHaveTextContent(text: string | RegExp): any;
  }
}

// Empty export to make it a module
export {};
