const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /.\.ts$/, exclude: /node_modules/, use: 'awesome-typescript-loader'},
            {test: /.\.tsx$/, exclude: /node_modules/, use: 'awesome-typescript-loader'}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'templates', 'index.html'),
            filename: path.join(__dirname, 'build', 'index.html'),
            hash: true
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx']
    }
};