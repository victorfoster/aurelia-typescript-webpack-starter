let path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    { AureliaPlugin } = require('aurelia-webpack-plugin');

module.exports = {
    entry: {
        app: 'aurelia-bootstrapper'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },

    resolve: {
        extensions: [
            '.webpack.js',
            '.web.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ],
        modules: [
            'src',
            'node_modules'
        ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
             {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                }))

            }
        ]
    },

    plugins: [
        new AureliaPlugin({ includeAll: 'src' }),
        new ExtractTextPlugin({ filename: 'app.css' })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        inline: true,
        open: true
    }

};
