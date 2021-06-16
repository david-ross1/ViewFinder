const rewireBabelLoader = require('craco-babel-loader');

module.exports = {
  plugins: [
    {
      plugin: rewireBabelLoader,
      options: {
        excludes: [new RegExp('node_modules/mapbox-gl/dist/mapbox-gl.js')],
      }
    }
  ]
};