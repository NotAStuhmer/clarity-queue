import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production', // Optimized build
  optimization: {
    minimize: true, // Minifies files for better performance
  },
});
