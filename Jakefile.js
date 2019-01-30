(function () {
    "use strict";

    var semver = require("semver");

    desc("Default Build");
    task("default", ["version"], function () {
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function () {
        console.log("Checking Node version: .");

        var packageJson = require("./package.json");

        var expectedVersion = packageJson.engines.node;

        var actualVersion = process.version;
        if (semver.neq(expectedVersion, actualVersion)) {
            fail("Your Node version " + actualVersion + " does not match expected version: " + expectedVersion);
        }
    });

    desc("Lint JavaScript code");
    task("lint", function () {
        jake.exec("node node_modules/.bin/jshint Jakefile.js", {interactive: true}, complete);
    }, { asyc: true });

}());