const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './dist/'//donde busca los archivos js cuando los quiera importar
  },
  module: {
    rules: [
      //aqui va los loaders
      // test: tipo de archivo que quiero reconocer
      // use: que loader se va a encargar del archivo
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
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 1000000, // 1MG
            //si no soporta el limit se exporta en dist
            name: 'videos/[name].[hash].[ext]' //se exporta en esta carpeta
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

