const path = require("path")

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "utils": resolve("src/utils"),
      "components": resolve("src/components"),
      "views": resolve("src/views")
    }
  }
}