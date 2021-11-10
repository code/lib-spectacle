const path = require('path');

/**
 * Production library config.
 *
 * Used as a base, this produces with other configs:
 *
 * - `dist/spectacle.min.js`: production library
 * - `dist/spectacle.js`: development library
 */

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    library: 'Spectacle',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'spectacle.min.js'
  },
  devtool: 'source-map',
  // TODO: Document externals
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-is': 'ReactIs',
    'prop-types': 'PropTypes'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true }
      },
      // { test: /\.jsx?$/, use: ['babel-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }
    ]
  }
};
