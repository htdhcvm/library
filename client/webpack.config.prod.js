const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, 'src/index.jsx')],
    devtool: 'inline-source-map',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@axios': path.resolve(__dirname, 'helpers/axiosService'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@assets': path.resolve(__dirname, 'assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ],
    },

    // plugins: [new HtmlWebpackPlugin()],
};
