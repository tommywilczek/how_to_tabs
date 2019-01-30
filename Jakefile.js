(function () {
    "use strict";

    var EXPECTED_NODE_VERSION = "v10.13.0"; //const in all caps, a convention

    desc("Default Build");
    task("default", ["version"], function () {
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function () {
        console.log("Checking Node version: .");

        let actualVersion = process.version;
        if (actualVersion !== EXPECTED_NODE_VERSION) {
            fail("Your Node version " + actualVersion + " does not match expected version: " + EXPECTED_NODE_VERSION)
        }
    });

}());