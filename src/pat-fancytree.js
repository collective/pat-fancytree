
define([
    "pat-base",
    "pat-registry",
    "pat-parser",
    "pat-logger",
    "fancytree"
], function(Base, registry, Parser, logger) {
    "use strict";

    debugger;
    var log = logger.getLogger("pat-clone");
    /* For logging, you can call log.debug, log.info, log.warn, log.error and log.fatal.
     *
     * For more information on how to use the logger and how to view log messages, please read:
     * https://github.com/Patternslib/logging
     */

    var parser = new Parser("fancytree");
    /* If you"d like your pattern to be configurable via the
     * data-pat fancytree attribute, then you need to
     * specify the available arguments here, by calling parser.addArgument.
     *
     * The addArgument method takes the following parameters:
     *  - name: The required name of the pattern property which you want to make
     *      configurable.
     *  - default_value: An optional default string value of the property if the user
     *      doesn"t provide one.
     *  - choices: An optional set (Array) of values that the property might take.
     *      If specified, values outside of this set will not be accepted.
     *  - multiple: An optional boolean value which specifies wether the
     *      property can be multivalued or not.
     *
     *  For example:
     *      parser.addArgument("color", "blue", ["red", "green", "blue"], false);
     */
    parser.addArgument("selectMode", "2", ["1", "2", "3"]);

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
            this.options = parser.parse(this.$el);
            /* this.options will now contain the configured pattern properties
             * you"ve registered with the parser.addArgument method.
             *
             * If the user provided any values via the data-pat fancytree
             * attribute, those values will already be set.
             */
             this.$el.fancytree({ selectMode: this.options.selectMode });
        }
    });
});
