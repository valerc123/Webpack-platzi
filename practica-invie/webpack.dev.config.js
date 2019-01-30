const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
         // donde inicia el archivo 
         invie: path.resolve(__dirname,'src/index.js')
    },
    output:{
        // Donde va enviar los archivos
        path: path.resolve(__dirname,'dist'),
        //como se van a llamar los archivos
        filename: 'js/[name].js'  // quedaría invie.js
    },
    //configurar puerto
    devServer: {
        port:9000
    },
    //configaurar loaders
    module:{
        rules:[
            {// configuracion de js
                test: /\.js|jsx$/,
                exclude: /(node_modules)|(bower_components)/, //excluye
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
                use: ['style-loader', 'css-loader']
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
                    name: 'images/[name].[hash].[ext]' // le asigno un nombre al archivo (crea la carpeta image)
                    } 
                }
            }
        ]     
    }
 
}