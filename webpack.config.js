'use strict';
const webpack = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// process.noDeprecation = true;

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BasePath = path.resolve(__dirname, 'app');

const config = {
    entry:
        {
            bundle: path.resolve(BasePath, 'src/js/index.js')
        },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'app/build')
    },
    // devtool: 'cheap-source-map',
    // context: __dirname,
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)
        modules: [
            "node_modules"
            // path.resolve(__dirname)
        ],
        // directories where to look for modules

        extensions: [".js", ".json", ".jsx", ".css"]
        // extensions that are used
    },

    watch: NODE_ENV === 'development',
    watchOptions: {
        poll: 1000,
        ignored: /node_modules/
    },

    module: {
        // configuration regarding modules

        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(BasePath, "src/js")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                // Best practices:
                // - Use RegExp only in test and for filename matching
                // - Use arrays of absolute paths in include and exclude
                // - Try to avoid exclude and prefer include
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                // options for the loader
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })

                /*[
                    // {
                    //     loader: "style-loader" // creates style nodes from JS strings
                    // },
                    // {
                    //     loader: "css-loader" // translates CSS into CommonJS
                    // },
                    // {
                    //     loader: "sass-loader" // compiles Sass to CSS
                    // }

                ]*/
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        //...
    }

    return config;
};