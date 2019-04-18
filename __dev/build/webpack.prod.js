const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const pathToBuild = path.resolve(__dirname, '../../docs/generated');
module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].js',
        path: pathToBuild
    },
    optimization: {//code splitting
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },//*/
    performance: {
        maxEntrypointSize: 1500000,//1.5 MB
        maxAssetSize: 1500000
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new WebpackPwaManifest({
            fingerprints: false,//no unique fingerprints
            name: 'drop-o-mat App',
            short_name: 'drop-o-mat',
            description: 'A small for mesuring a distance by the time it takes to reach the ground.',
            background_color: '#ffffff',
            icons: [
                {
                    src: path.resolve('src/assets/favicon.png'),
                    sizes: [192, 512] // multiple sizes
                }
            ],
            start_url: '/drop-o-mat/',//relative path @see: https://developers.google.com/web/fundamentals/web-app-manifest/#start-url
        })
    ]
});