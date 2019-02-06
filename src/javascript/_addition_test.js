(function() {
    "use strict";

    var assert = require("./assert");

    describe("Something", function () {

        it('should do something', function () {

            var div = document.createElement("div");

            div.innerHTML = "this exampleee";

            document.body.appendChild(div);

            var p = document.createElement("p");

            p.innerHTML = "this is p";

            div.appendChild(p);


        });
    });

}());