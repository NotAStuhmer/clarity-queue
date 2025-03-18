import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.tsx', // Entry point for the app
  output: {
    path: path.resolve(process.cwd(), 'dist'), // Output directory
    filename: 'bundle.js', // Bundled output file
    clean: true, // Clean old files in 'dist' when building
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Allow imports without specifying extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Target TypeScript files
        use: 'ts-loader', // Use ts-loader to compile TypeScript
        exclude: /node_modules/, // Exclude dependencies
      },
      {
        test: /\.html$/, // Target HTML files
        use: 'html-loader', // Load HTML files into JavaScript
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use the HTML template
      filename: 'index.html',
    }),
  ],
};
