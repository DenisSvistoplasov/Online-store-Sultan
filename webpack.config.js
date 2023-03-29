const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

function absPath(pth) {
  return path.resolve(__dirname, pth);
}

const NODE_ENV = process.env.NODE_ENV;
const mode = NODE_ENV ? NODE_ENV : 'development';
const isProd = mode === 'production';
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  mode: mode,

  entry: absPath('src/index.js'),
  output: {
    path: absPath('dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.s?[ca]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /(?<!global)\.s?[ca]ss$/i,
                localIdentName: isProd ? '[hash:base64]' : '[name]__[local]'
              }
            }
          },
          'sass-loader'
        ]
      },

      {
        test: /\.[tj]sx?$/i,
        exclude: /node_modules/,
        use: 'ts-loader'
      },

      {
        test: /\.(png|jpe?g|svg|webp|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "image/[name][ext]",
        },
      },
      {
        test: /\.(ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        }
      }
    ]
  },

  optimization: {
    minimize: isProd
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({template: './src/index.html'})
  ],

  devtool: isProd ? false : 'source-map'


};