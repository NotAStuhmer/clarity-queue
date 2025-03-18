import { defineConfig } from 'cypress';
import webpackConfig from './webpack.dev.js'; // Import the existing Webpack dev config

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig, // Specify the webpackConfig for the dev environment
    },
  },
});
