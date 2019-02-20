(function() {
    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function() {

        var IRRELEVANT = "irrelevant";

        var container;

        beforeEach(function() {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(function() {
            removeElement(container);
        });

        it("hides all content elements except the default upon initialization", function() {
            var content1 = createTabContent();
            var defaultElement = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [ createTab(), createTab(), createTab() ],
                content: [ content1, defaultElement, content3 ],
                default: defaultElement,
                activeTabClass: "activeTab",
                contentHideClass: "hideClass"
            });

            assert.equal(getClasses(content1), "hideClass", "element 1 should be hidden");
            assert.equal(getClasses(defaultElement), "", "default element should not be hidden");
            assert.equal(getClasses(content3), "hideClass", "element 3 should be hidden");
        });

        it("preserves existing classes when hiding a content element", function() {
            var defaultContent = createTabContent();
            var hiddenContent = createTabContent();
            hiddenContent.setAttribute("class", "existingClass");

            tabs.initialize({
                tabs: [ createTab(), createTab() ],
                content: [defaultContent, hiddenContent],
                default: defaultContent,
                activeTabClass: IRRELEVANT,
                contentHideClass: "newClass"
            });

            assert.equal(getClasses(hiddenContent), "existingClass newClass");
        });

        it('should style the default tab with a class', function () {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();

            var defaultContent = createTabContent();

            tabs.initialize({
                tabs: [ tab1, defaultTab, tab3 ],
                content: [ createTabContent(), defaultContent, createTabContent() ],
                default: defaultContent,
                activeTabClass: "activeTab",
                contentHideClass: IRRELEVANT
            });

            assert.equal(getClasses(tab1), "", "tab 1 should not be styled");
            assert.equal(getClasses(defaultTab), "activeTab", "default element should be styled");
            assert.equal(getClasses(tab3), "", "tab 3 should not be styled");
        });

        function createTab() {
            var tab = addElement("div");
            tab.innerHTML = "tab";
            return tab;
        }

        function createTabContent() {
            var tab = addElement("div");
            tab.innerHTML = "content";
            return tab;
        }

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