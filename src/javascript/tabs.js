(function() {
    "use strict";

    exports.initialize = function initialize(options) {
        var tabs = options.tabs;
        var content = options.content;
        var defaultElement = options.default;
        var contentHideClass = options.contentHideClass;
        var activeTabClass = options.activeTabClass;

        if (tabs === undefined) throw new Error("Expected options.tabs");
        if (content === undefined) throw new Error("Expected options.content");
        if (defaultElement === undefined) throw new Error("Expected options.default");
        if (activeTabClass === undefined) throw new Error("Expected options.activeTabClass");
        if (contentHideClass === undefined) throw new Error("Expected options.contentHideClass");

        content.forEach(function(element) {
            element.classList.add(contentHideClass);
        });
        defaultElement.classList.remove(contentHideClass);

        if (tabs !== undefined) tabs[0].classList.add(activeTabClass);
    };

}());