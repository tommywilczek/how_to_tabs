/* globals jake: false, desc: false, task: false, complete: false, fail: false */

(function () {
    "use strict";

    var semver = require("semver");
    var jshint = require("simplebuild-jshint");
    var karma = require("simplebuild-karma");

    var KARMA_CONFIG = "karma.conf.js";

    //***** General purpose tasks

    desc("Start the Karma server (run this first)");
    task("karma", function () {
        console.log("starting karma server: ");

        karma.start({
            configFile: KARMA_CONFIG
        }, complete, fail);
    }, { asyc: true });

    desc("Default Build");
    task("default", ["version", "lint", "test"], function () {
        console.log("\n\nBUILD OK");
    });

    desc("Run a localhost server");
    task("run", function () {

        jake.exec("node node_modules/http-server/bin/http-server src", {interactive: true}, complete);
    }, { asyc: true });

    //***** Supporting Tasks

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

        process.stdout.write("Linting JavaScript: ");

        jshint.checkFiles({
            files: ["Jakefile.js", "src/**/*.js"],
            options: lintOptions(),
            globals: lintGlobals()
        }, complete, fail);
    }, { asyc: true });

    desc("Run tests");
    task("test", function () {
        console.log();
        console.log("Testing JavaScript: ");
        karma.run({
            configFile: KARMA_CONFIG,
            expectedBrowsers: [
                "Chrome 71.0.3578 (Mac OS X 10.14.2)",
                "Firefox 65.0.0 (Mac OS X 10.14.0)",
                "Safari 12.0.2 (Mac OS X 10.14.2)"
            ],
            strict: !process.env.loose //add 'loose=true' to run
        }, complete, fail);
    }, { async: true });

    function lintOptions() {
        return {
            bitwise: true,
            eqeqeq: true,
            forin: true,
            freeze: true,
            futurehostile: true,
            latedef: "nofunc",
            noarg: true,
            nocomma: true,
            nonbsp: true,
            nonew: true,
            strict: true,
            undef: true,

            node: true,
            browser: true
        };
    }

    function lintGlobals() {
        return {
            //Mocha
            describe: false,
            it: false,
            before: false,
            beforeEach: false,
            after: false,
            afterEach: false
        };
    }

}());