(function () {
    "use strict";

    exports.initialize = function initialize(element, className) {
        element.classList.add(className);
        // var existingClasses = element.getAttribute("class");
        // if (existingClasses === null) {
        //     element.setAttribute("class", className);
        // }
        // else {
        //     element.setAttribute("class", existingClasses + " " + className);
        // }
    };
}());