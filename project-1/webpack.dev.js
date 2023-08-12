const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

/** "webpack-dev-server --config webpack.dev.js --open
 * --open -> just for the open file in new window
 * --config -> define the file path which file to use
 */

module.exports = merge(common, {
  mode: "development", // by default it's production mode, in production it's minify the code
  output: {
    /** so if always use the same file name maybe some browser already cache that file and if we send new code it's still fetched form the cached
     * to fix that we need to add the different hash in filename like -> bundle.[hash].js
     * using contenthash it would be prevent from the cache busting.
     * TODO: when any changed detect into files it will generate new contenthash.
     * So now every time js file name will be changed but we hardcoded that into the html file
     * TODO: to fix that we need to plugin for that.
     **/
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"), //__dirname = current working directory
  },
});
