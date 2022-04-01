//const ReactRefreshWebpackPlugin = require('react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        static: "../dist",
        open: true,
        hot: true
    },
    plugins: [
      //  new ReactRefreshWebpackPlugin()
    ],
    devtool: "eval-source-map",
}

module.exports = merge(common,  devConfig )