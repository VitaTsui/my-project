const path = require("path");

const config = {
  mode: "production",
  output: {
    clean: true,
    path: path.resolve(__dirname, "../dist"),
  },
};

module.exports = config;
