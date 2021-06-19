const rewireBabelLoader = require("craco-babel-loader");

module.exports = {
  plugins: [
    {
      plugin: rewireBabelLoader,
      options: {
        excludes: [/mapbox-gl/],
      },
    }
  ]
};