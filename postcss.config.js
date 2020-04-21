const path = require("path");

module.exports = {
  plugins: [
    require("postcss-nested"),
    require("postcss-mixins")({
      mixinsDir: path.join(__dirname, "./src/style/mixins"),
    }),
  ],
};
