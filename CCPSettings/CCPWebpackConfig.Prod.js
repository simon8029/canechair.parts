
const CommonConfig = require('./CCPWebpackConfig.Common');
const WebpackConfigHelper = require('./CCPWebpackConfig.Helper');
const WebpackMerge = require('webpack-merge');
const glob = require('glob');

const ProductionConfig = WebpackMerge([
  WebpackConfigHelper.extractCSS({ use: ["css-loader", WebpackConfigHelper.autoprefix()] }),
  WebpackConfigHelper.purifyCSS({ paths: glob.sync(`${CommonConfig.Paths.src}/**/*.js`, { nodir: true }) }),
  WebpackConfigHelper.loadImages({ options: { limit: 15000, name: "[name].[ext]" } }),
  WebpackConfigHelper.generateSourceMaps({ type: "source-map" })
]);

module.exports = WebpackMerge(CommonConfig.Settings, ProductionConfig);
