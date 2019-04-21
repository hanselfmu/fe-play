const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  mode: 'production',
  optimization: {
    usedExports: true,
  },
};
