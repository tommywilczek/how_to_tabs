(function() {
    "use strict";

    var assert = require("chai").assert;

    describe("Addition", function () {
        it('should  add positive numbers', function () {
            assert.equal(add(3,4), 7)
        });
    });


    function add(a, b) {
        return a + b;
    }

}());