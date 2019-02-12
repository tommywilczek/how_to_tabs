(function() {
    "use strict";

    var assert = require("./assert");
    var tabs = require("./tabs.js");



    describe("Tabs", function () {

        it('hides an element', function () {

            // Arrange. Create the element
            var element = addElement("div");

            // Act
            tabs.initialize(element);

            // Assert. Assert element is not visible

            assert.equal(getDisplay(element), "none");

            // Remove. Remove the test element (reset the DOM)
            removeElement(element);

        });

        function addElement(tagName) {
            var element = document.createElement(tagName);
            document.body.appendChild(element);
            return element;
        }

        function getDisplay(element) {
            var styles = getComputedStyle(element);
            return styles.getPropertyValue("display");
        }

        function removeElement(element) {
            element.parentNode.removeChild(element);
        }
    });

}());