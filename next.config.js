module.exports = {
  target: 'serverless',
  webpack: (config) => {
    config.plugins = config.plugins || [];
    return config;
  },
};
