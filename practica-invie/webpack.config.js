const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const UglifyJsPlugin = require ('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {

    if (env.NODE_ENV === 'production'){
        config.plugins.push(
            new CleanWebpackPlugin(['dist'],{root: __dirname})
        )
    }
    return config
}
   let config = {
        plugins :[
            new MiniCssExtractPlugin ({
                filename: "css/[name].[hash].css",
                chunkFilename: '[id].[chunkhash]'
              }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'index.html'),// template donde va poner los js y css
                filename: path.join(__dirname,'index-prod.html') //salida del archivo
            })
        ],
        entry: {
            // donde inicia el archivo 
            invie: path.resolve(__dirname,'src/index.js')
        },
        output:{
            // Donde va enviar los archivos
            path: path.resolve(__dirname,'dist'),
            //como se van a llamar los archivos
            filename: 'js/[name].[hash].js',  // quedaría invie.js
            publicPath:  path.resolve(__dirname,'dist') + "/",  
            chunkFilename: 'js/[id].[chunkhash].js'
        },
        //configurar loaders
        module:{
            rules:[
                {// configuracion de js
                    test: /\.js|jsx$/,
                    exclude: /(node_modules)/, //excluye
                    use: {
                        loader: 'babel-loader',
                        options: {
                        presets:["@babel/preset-env","@babel/preset-react"],
                        plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                        }
                    }
                },
                {
                // configuracion de estilos
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                minimize: true, //comprime el codigo para que pese menos
                            }
                        },
                        "css-loader"
                    ]
                },
                {
                //configuracion de imagenes y fuentes
                    test: /\.(jpg|png|gif|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 1000000, //limite de peso de archivo va hacer la transformacion(bytes)
                        //exporta la imagen a dist
                        fallback: //cuando las imagenes pesan mas Q el limit
                        'file-loader', // este se usa por defecto 
                        name: 'images/[name].[hash].[ext]' // le asigno un nombre al archivo (crea carpeta images)
                        } 
                    }
                }
            ]     
        },
        // optimization: {
        //     minimizer: [
        //         new UglifyJsPlugin(),
        //         new OptimizeCSSAssetsPlugin({})
        //     ]
        // }
    }
  
