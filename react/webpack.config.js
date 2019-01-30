const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode:"development",
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      //aqui va los loaders
      // test: tipo de archivo que quiero reconocer
      // use: que loader se va a encargar del archivo
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000 //limite de peso de archivo va hacer la transformacion(bytes)
            //exporta la imagen a dist
          } 
        }
      },
      { 
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
            presets: [ "babel-preset-env","babel-preset-react"]
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

