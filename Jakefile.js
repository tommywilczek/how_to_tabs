(function () {
    "use strict";

    desc("Default Build")
    task("default", function () {
        console.log("default task");
    });

    desc("Default Build")
    task("gooble", function () {
        console.log("default task");
    });

    console.log("" +
        "\n\nBUILD OK");
}());