const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); reminder for later use

module.exports = {
    mode: 'production',
    // devtool: 'eval-source-map', - only in development mode
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        expenses: path.resolve(__dirname, 'src/expenses.js'),
        summary: path.resolve(__dirname, 'src/summary.js'),
        budget: path.resolve(__dirname, 'src/budget.js')
    },
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        open: true,
        hot: true,
        port: 9000
    },
};