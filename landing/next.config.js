const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  assetPrefix: "./",
  webpack5: false,
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.plugins.push(
  //     new BundleAnalyzerPlugin({
  //       analyzerMode: 'server',
  //       analyzerPort: isServer ? 8888 : 8889,
  //       openAnalyzer: true,
  //     })
  //   )
  //   return config
  // },

};

