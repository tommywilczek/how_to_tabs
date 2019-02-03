(function() {
    "use strict";

    var addition = require("./addition");
    var assert = require("./assert");

    describe("Addition", function() {

        it("adds positive numbers", function() {
            assert.equal(addition.add(3, 4), 7);
        });

        it("uses IEEE 754 floating point", function() {
            assert.equal(addition.add(0.1, 0.2), 0.30000000000000004);
        });

    });

}());