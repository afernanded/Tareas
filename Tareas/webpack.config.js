const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        ver: "./src/js/main.js",
        crear: "./src/js/crear.js",
        modificar: "./src/js/modificar.js",
        eliminar: "./src/js/eliminar.js",
        cabecera: "./src/js/cabecera.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['ver']
        }),
        new HtmlWebpackPlugin({
            template: './src/crear.html',
            filename: 'crear.html',
            chunks: ['crear']
        }),
        new HtmlWebpackPlugin({
            template: './src/modificar.html',
            filename: 'modificar.html',
            chunks: ['modificar']
        }),
        new HtmlWebpackPlugin({
            template: './src/eliminar.html',
            filename: 'eliminar.html',
            chunks: ['eliminar']
        })
    ]
}