
define([
    "pat-base",
    "pat-registry",
    "pat-parser",
    "pat-logger",
    "fancytree"
], function(Base, registry, Parser) {
    "use strict";

    var parser = new Parser("fancytree");
    parser.addArgument("selectMode", 2, [1, 2, 3]);
    parser.addArgument("checkbox", false);

    return Base.extend({
        /* The name is used to store the pattern in a registry and needs to be
         * unique.
         */
        name: "fancytree",
        /* The trigger specifies the selector (CSS or jQuery) which Patternslib
         * will scan for in order to identifiy and initialize this pattern.
         */
        trigger: ".pat-fancytree",

        init: function initUndefined () {
          console.log("selectMode " + this.options.selectMode);
          console.log("checkbox " + this.options.checkbox);
          this.options = parser.parse(this.$el);
          this.$el.fancytree(this.options);
        }
    });
});
