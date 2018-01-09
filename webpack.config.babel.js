import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const publicPath         = 'http://localhost:8050/public/assets';
const cssName            = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
const jsName             = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

module.exports = {
  entry: ['babel-polyfill', './src/client.js'],
  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new ExtractTextPlugin({
      filename: cssName,
      disable: false,
      allChunks: true
    })
    // new HtmlWebpackPlugin({
    //   title: 'Output Management'
    // })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: `${__dirname}/public/assets/`,
    filename: jsName,
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'

        })
      },
      // {
      //   test: /\.css$/,
      //   use:[
      //     { loader: 'css-loader' }
      //   ]
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // loaders: ['babel-loader', 'eslint-loader']
        use:[
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ]
      }
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: 'react-hot-loader!babel-loader'
      // }
    ]
  }
};
