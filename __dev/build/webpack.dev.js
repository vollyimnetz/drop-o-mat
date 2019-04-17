'use strict'
const webpack = require('webpack')
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../assets/generated')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
});