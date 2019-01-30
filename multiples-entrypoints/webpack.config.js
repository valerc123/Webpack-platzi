const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: path.resolve(__dirname,'src/js/index.js'),
    precios: path.resolve(__dirname,'src/js/precios.js'),
    contacto: path.resolve(__dirname,'src/js/contacto.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
        //aqui va los loaders
      { 
        // test: tipo de archivo que quiero reconocer
       // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader'  
        ]
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

