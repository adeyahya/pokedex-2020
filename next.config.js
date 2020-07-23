module.exports = {
  target: "serverless",
  webpack: (config, options) => {
    config.plugins = config.plugins || [];
    return config;
  },
};
