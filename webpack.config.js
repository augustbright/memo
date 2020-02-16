const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildTimeEnvVariables = {
    GITHUB_HOST: process.env.GITHUB_HOST
};

console.log(`process.env.GITHUB_HOST is ${process.env.GITHUB_HOST}`);

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /.\.ts$/, exclude: /node_modules/, use: 'awesome-typescript-loader' },
            { test: /.\.tsx$/, exclude: /node_modules/, use: 'awesome-typescript-loader' },
            { test: /.\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'templates', 'index.html'),
            filename: path.join(__dirname, 'build', 'index.html'),
            hash: true,
            buildTimeEnvVariables: JSON.stringify(buildTimeEnvVariables)
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true
    },

    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx']
    },

    devtool: 'eval-source-map'
};