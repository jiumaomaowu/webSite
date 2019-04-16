const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.config.js');
const autoprefixer = require("autoprefixer")
const px2rem = require("postcss-px2rem")
const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
          
        {
            test:/\.scss$/,      
            loaders:['style-loader','css-loader','sass-loader']     
        },
        {
            test: /\.svg$/,
            loader: 'react-svg'
        },
//         {
//             test: /\.css$/,
//             use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader"]
//         },
//         {//antd样式处理                         
//             test:/\.css$/,
//             exclude:/src/,
//               use:[
//                   { loader: "style-loader"},
//                   {
//                       loader: "css-loader",
//                       options:{
//                           importLoaders:1
//                       }
//                   }
//               ]
//         }
// ant的按需加载
{
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
},







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
                "target":'http://127.0.0.1:8888',
               
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);