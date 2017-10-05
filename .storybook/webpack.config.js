// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');

module.exports = {
  node: {
    child_process: 'empty',
    fs: 'empty',
  },
  plugins: [
    // your custom plugins
  ],
  module: {
      rules: [
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"],
          include: /node_modules/
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'file-loader?hash=sha512&digest=hex&name=[hash].[ext]', 
              {
                loader: 'image-webpack-loader',
                query: {
                  // progressive: true,
                  // optimizationLevel: 4,
                  // interlaced: false,
                  gifsicle: {
                    interlaced: false
                  },
                  optipng: {
                    optimizationLevel: 4,
                  },
                  pngquant: {
                    quality: '75-90',
                    speed: 3,
                  },
                },
              }]
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      ]
  }
};
