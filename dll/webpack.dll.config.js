const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  // mode:"development",
  entry: {
    modules:[
      'react', 'react-dom'
    ],
    //no es necesario los multiples entrypoints
    // home:path.resolve(__dirname, 'src/js/index.js'),
    // contact:path.resolve(__dirname, 'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]'
  },
  //los loaders no van hacer necesarios
//   module: {
//     rules: [
//       //aqui va los loaders
//       // test: tipo de archivo que quiero reconocer
//       // use: que loader se va a encargar del archivo
//       {
//         type: 'javascript/auto',
//         test: /\.json$/,
//         use: 'json-loader'
//       },
//       {
//         test: /\.(jpg|png|gif|woff|eot|ttf|svg|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000 //limite de peso de archivo va hacer la transformacion(bytes)
//             //exporta la imagen a dist
//           } 
//         }
//       },
//       { 
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: {
//               modules:true, //deja importar mas archivos css en un file.css
//               importLoaders: 1 //deja agregar otros loaders como 'postcss-loader'
//             }
//           },
//           'postcss-loader'
//         ] 
//       },
//       { 
//         test: /\.less$/,
//         use: [MiniCssExtractPlugin.loader,
//           'css-loader',
//           {
//             loader: 'less-loader',
//             options: {
//               noIeCompat: true, //los estilos de less no sean compatibles con IE
//             }
//           }
//         ]
//       },
//       { 
//         test: /\.styl$/,
//         use: [MiniCssExtractPlugin.loader,
//           'css-loader',
//           {
//             loader: 'stylus-loader',
//             options: {
//               //modulos externos q apoyan a stylus 
//               use:[
//                 require('nib'), //sirve para que los prefijos de los navegadores viejos funcionen bien
//                 require('rupture')//soporte a media querys
//               ],
//               import: [ //se auto importan
//                 '~nib/lib/nib/index.styl',
//                 '~rupture/rupture/index.styl'
//               ]
//             }
//           }
//         ]
//       },
//       { 
//         test: /\.scss$/,
//         use: [MiniCssExtractPlugin.loader,
//           'css-loader', 'sass-loader']
//       },
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [ "babel-preset-env","babel-preset-react"]
//           }
//         }
//       }
//     ]
//   },
  plugins: [
    //aqui va los plugins
    //new ExtractTextPlugin("css/[name].css")
    // new MiniCssExtractPlugin({
    // filename: "./css/[name].css"
    // })

    new webpack.DllPlugin({
        name: "[name]",
        path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
//   optimization: {
//     splitChunks:{
//       name: "vendor",
//       minChunks: Infinity,
//       chunks: 'initial'
      
//     }
//   }
};

