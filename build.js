var webpack = require("webpack");

var compiler = webpack({
  entry: "./app/index.js",
  output: {
    filename: "./www/app-loader.js"
  }
});

compiler.watch({
  aggregateTimeout: 300,
  poll: true
}, function(err, stats) {
  var compilationErrors = stats.compilation.errors;
  err = err || compilationErrors.length && compilationErrors;
  if (err) {
    return console.log(err);
  }

  console.log('build', new Date());
});
