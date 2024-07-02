const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common.cjs");
const productionConfig = require("./webpack.config.prod.cjs");
const developmentConfig = require("./webpack.config.dev.cjs");

module.exports = (env) => {
  switch (true) {
    case env.development:
      const _devConfig = merge(commonConfig, developmentConfig);
      return _devConfig;
    case env.production:
      const _prodConfig = merge(commonConfig, productionConfig);
      return _prodConfig;
    default:
      return new Error("No matching configuration was found");
  }
};
