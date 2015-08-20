// AMD: define client app module + deps
require(["app", "router"], function(app, Router) {

  // Start application

  // Define your master router on the application namespace and trigger all
  // navigation from this instance.
  app.router = new Router();

  // Trigger the initial route and enable HTML5 History API support, set the
  // root folder to '/' by default.  Change in app.js.
  Backbone.history.start({ pushState: true, root: app.root });

  // The current optimizer setup includes external modules from the bower
  // components directory. Backbone will do an AMD style definition with
  // "underscore" and "jquery" dependencies, and so during build the requirejs
  // path config makes the former use a "lodash.underscore" drop-in.
  // Neither has noConflict on, making both $ and _ global.
  //
  // Backbone and the global router root are wrapped in CJS compatible
  // globally working modules. However if there is no need to load them
  // straight way, such as now, don't. That is the require.js way to keep a growing
  // app manageble, but it needs a proper 'require' at the client. Almond seems to be
  // good to support coffeescript but not to load additional resources, and
  // rather a way to write packages that add some things to support AMD style API's
  // without the full requirejs in the distribution.
  //
  // A static page loaded from index.html then lets the app run client side using:
  //
  // <script src="/source.min.js" data-main="/app/config"></script>
  //
  // Loading the exact same config as using during build, but there is nothing
  // to require since the optimizer has packaged all code.
  //
  // It does not seem the lodash template loader is used, but then the Backbone
  // app is only a skeleton. However not having the dependency does exclude it from
  // the package, and almond cannot load it.
  //
  //var Template = require('template');
  //console.log('Template', Template);

  // See https://github.com/backbone-boilerplate/backbone-boilerplate/wiki/AMD-Modules-%28RequireJS%29 and Almond readme

});
