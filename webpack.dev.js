import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // Enables source maps for debugging
  devServer: {
    static: './dist',
    hot: true, // Hot reloading
    open: true,
    port: 3000, // Runs on localhost:3000
  },
});
