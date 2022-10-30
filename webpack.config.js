const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    devServer: {
        port: 3245,
        client: {
            overlay: false,
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(tsx|jsx|ts|js)?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {noEmit: false}
                    }   
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};