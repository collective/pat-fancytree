require.config({
  baseUrl: "src",
  paths: {
    "pat-fancytree": "pat-fancytree",
    "fancytree": "bower_components/fancytree/dist/src/jquery.fancytree",
    // FRAMEWORK DEPENDENCIES
    "expect": "bower_components/expect/index",
    "jquery": "bower_components/jquery/dist/jquery",
    "jquery-ui": "bower_components/jquery-ui/ui",
    "jquery.browser": "bower_components/jquery.browser/dist/jquery.browser",
    "logging": "bower_components/logging/src/logging",
    "pat-base": "bower_components/patternslib/src/core/base",
    "pat-compat": "bower_components/patternslib/src/core/compat",
    "pat-jquery-ext": "bower_components/patternslib/src/core/jquery-ext",
    "pat-logger": "bower_components/patternslib/src/core/logger",
    "pat-parser": "bower_components/patternslib/src/core/parser",
    "pat-mockup-parser": "bower_components/patternslib/src/core/mockup-parser",
    "pat-registry": "bower_components/patternslib/src/core/registry",
    "pat-utils": "bower_components/patternslib/src/core/utils",
    "underscore": "bower_components/underscore/underscore"
  },
  shim: {
    "fancytree": {
      deps: [
        "jquery",
        // only depend on needed jquery ui parts
        "jquery-ui/core",
        "jquery-ui/widget",
        "jquery-ui/effect",
        "jquery-ui/effect-blind"
      ]
    }
  },
  wrapShim: true
});
if (typeof(require) === "function") {
    require(["pat-registry", "pat-fancytree"], function(reg) {
      reg.init();
    });
}
