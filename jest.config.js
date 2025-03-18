export default {
  testEnvironment: 'jsdom', // Simulates browser environment for React components
  // setupFilesAfterEnv: ['@testing-library/jest-dom'], // Enhances Jest assertions
  setupFilesAfterEnv: ['./src/jest-setup.ts'], // Points to local Jest setup file
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Ensures TypeScript compatibility
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Uses ts-jest to compile TypeScript files
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};
