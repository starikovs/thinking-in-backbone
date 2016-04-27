const webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app'
    },
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: '[name].js'
    },
    devtool: "cheap-inline-module-sourcemap",
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            include: __dirname + '/app',
            loader: 'babel?presets[]=es2015'
        }]
    },
    externals: {
        'jquery': 'jQuery',
        'underscore': '_',
        'backbone': 'Backbone',
        'handlebars': 'Handlebars'
    }
};

