const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
        //aqui va los loaders
      { 
        // test: tipo de archivo que quiero reconocer
       // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    //aqui va los plugins
    //new ExtractTextPlugin("css/[name].css")
    new MiniCssExtractPlugin({
    filename: "./css/[name].css"
    })
  ] 
}

