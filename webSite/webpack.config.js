const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer")
const commonConfig = require('./webpack.common.config.js');
const px2rem = require("postcss-px2rem")
const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
        //     {
        //     test: /\.css$/,
        //     use: ExtractTextPlugin.extract({
        //         fallback: "style-loader",
        //         use: ["css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader"]
        //     })
        // },
        {
            test:/\.scss$/,      
            loaders:['style-loader','css-loader','sass-loader']     
        },{
            test: /\.css$/,
            include: /node_modules/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                    },
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009',
                            }),
                            px2rem({remUnit:75})
                        ],
                    },
                },
            ],
        },
        // 正常的网页中的css
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                        modules: true,
                        localIdentName: "[name]__[local]___[hash:base64:5]",

                    },
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009',
                            }),
                            px2rem({remUnit:75})
                        ],
                    },
                },
            ],
        }
    ]
    },
    devServer: {
        port: 8088,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        open: process.platform === 'darwin',
        host: 'localhost',
        https: false,
        hotOnly: false, 
        proxy: {
            // "/api/*": "http://localhost:8090/$1"
            "/api":{
                "target":'39.106.186.189:8888',
               
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]

};

module.exports = merge(commonConfig, publicConfig);