(function () {
    "use strict";


    desc("Default Build");
    task("default", ["version"], function () {
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function () {
        console.log("Checking Node version: .");

        var packageJson = require("./package.json");

        var expectedVersion = "v" + packageJson.engines.node;

        let actualVersion = process.version;
        if (actualVersion !== expectedVersion) {
            fail("Your Node version " + actualVersion + " does not match expected version: " + expectedVersion)
        }
    });

}());