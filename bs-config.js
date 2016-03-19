module.exports = {
  server: {
    // Override the middleware to load the typescrip generated .js and .js.map files from the dist folder
    middleware: {
      //We have to set the accept header for the .map file requests as the rewrite rules will not be applied otherwise
      1:  function(req, res, next) {
          if (req.url.endsWith('.map')){
            req.headers.accept = "*/*";
          }
          next();
      },
      //We add the rewrite rules to laod the js and js.map files from the dist folder
      2: require('connect-history-api-fallback')({index: '/index.html',
      verbose: true,
      rewrites: [
      {
        from: /^\/app\/(.*)\.js$/,
        to: function(context) {
          return '/dist' + context.parsedUrl.pathname;
        }
      },
      {
        from: /^\/app\/(.*)\.js\.map$/,
        to: function(context) {
          return '/dist' + context.parsedUrl.pathname;
        }
      }
    ]})
    }
  }
};