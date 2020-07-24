/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images');
const withOffline = require('next-offline');

const config = {
  target: 'serverless',
  webpack: (config) => {
    config.plugins = config.plugins || [];
    return config;
  },
};

module.exports = withOffline(withImages(config));
