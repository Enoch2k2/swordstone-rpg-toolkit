const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const env = process.env.WEBPACK_ENV;

const libraryName = 'index';
const plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: __dirname + '/js/index.js',
  devtool: 'source-map',
  output: { ... },
  module: { ... },
  resolve: { ... },
  plugins: plugins
};

module.exports = config;
