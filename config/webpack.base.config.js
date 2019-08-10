var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: [
//     './src/index.js'
//   ],
//   output: {
//     path: __dirname,
//     publicPath: '/',
//     filename: 'bundle.js'
//   }
// }

module.exports = {
  // entry: [
  //   './src/index.js'
  // ],
  // output: {
  //   path: __dirname,
  //   publicPath: '/',
  //   filename: 'bundle.js'
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
            loader: "babel-loader"
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
      {
        test: /\.(svg|jpg|gif|jpeg|ttf)$/,
        use: 'url-loader'
        //preprocesses imported image files
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './src/index.html',
  //     filename: './index.html'
  //   })
  // ]
}
