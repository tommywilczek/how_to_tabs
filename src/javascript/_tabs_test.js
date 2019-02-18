(function() {
    "use strict";

    var assert = require("./assert");
    var tabs = require("./tabs.js");



    describe("Tabs", function () {

        var container;

        beforeEach(function () {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(function () {
            removeElement(container);
        });

        it('hides an element by setting a class', function () {

            var element = addElement("div");

            tabs.initialize([element], "someClass");

            assert.equal(getClasses(element), "someClass");

            removeElement(element);

        });

        it('should hide multiple elements', function () {
            var element1 = addElement("div");
            var element2 = addElement("div");
            var element3 = addElement("div");

            tabs.initialize([element1, element2, element3], "hideClass");

            assert.equal(getClasses(element1), "hideClass", "element 1");
            assert.equal(getClasses(element2), "hideClass", "element 2");
            assert.equal(getClasses(element3), "hideClass", "element 3");
        });

        it('preserves an existing class when hiding an element', function () {
            var element = addElement("div");
            element.setAttribute("class", "existingClass");

            tabs.initialize([element], "newClass");

            assert.equal(getClasses(element), "existingClass newClass");
        });


        function getClasses(element) {
            return element.getAttribute("class");
        }

        function addElement(tagName) {
            var element = document.createElement(tagName);
            container.appendChild(element);
            return element;
        }

        function removeElement(element) {
            element.parentNode.removeChild(element);
        }
    });

}());