'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    resolve: {
        alias: {
            '~': path.join(__dirname, '../src'),
            //'jQuery': 'jquery'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loaders: ['css-loader']
            }, {
                test: /\.(scss)$/,
                use: [
                    { loader: 'vue-style-loader' },
                    { loader: MiniCssExtractPlugin.loader },
                    /*/{
                        loader: 'style-loader', // inject CSS to page
                    }, //*/{
                        loader: 'css-loader', // translates CSS into CommonJS modules
                        options: { url: false }
                    }, {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            ident: 'postcss',//needed for require to work
                            plugins: [ // post css plugins, can be exported to postcss.config.js
                                //require('precss')(),
                                require('postcss-discard-comments')(),
                                require('autoprefixer')()
                            ]
                        }
                    }, {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    externals: {
        //jquery: 'jQuery',
        //moment: 'moment'
    },
    plugins: [
        new webpack.DefinePlugin({
            'MY_WEBAPP_VERSION_DATE': JSON.stringify(new Date()),
        }),
        new CopyWebpackPlugin([ {from:'src/assets', to:'assets'} ], {

        }),
        new MiniCssExtractPlugin({ filename: "[name].css", disable: false }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}