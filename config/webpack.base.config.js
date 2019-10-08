var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode:'development',
  entry: './src/index.js',
    
    
  // optimization:{
  //   splitChunks:{
  //     chunks:'async'
  //   }
  // },
  // output:{
  //   // filename:'[name].bundle.js',
  //   // chunkFilename: '[name].bundle.js',
  //   // path: path.resolve(__dirname, 'dist')
    
  // },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use:{
            loader: "babel-loader",
        }
      },
      {
      test:/\.css$/,
      use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|ttf)$/,
        use: 'file-loader'
        //preprocesses imported image files
      },
      {test: /\.(svg|jpg|gif|jpeg|ttf|png)$/, use: 'url-loader'},
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Output Management',
    //   template: './src/index.html',
    //   filename: './index.html'
    // })
  ]
}
