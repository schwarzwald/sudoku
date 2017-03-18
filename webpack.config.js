const ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
   entry: './main.js',

   output: {
      path:'/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader')
         }
      ]
   },

   plugins: [
     new ExtractTextPlugin({
       filename: 'style.css',
       allChunks: true
     })
   ]
}

module.exports = config;
