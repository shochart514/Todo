System.register(['angular2/platform/browser', './greeting/greeting'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, greeting_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (greeting_1_1) {
                greeting_1 = greeting_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(greeting_1.default);
        }
    }
});

//# sourceMappingURL=../maps/app/bootstrap.js.map
