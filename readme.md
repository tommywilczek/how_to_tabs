How To: Tabs
============
This is the source code for the ["How To: Tabs" series](http://www.letscodejavascript.com/v3/episodes/how_to) of James Shore's [Let's Code: Test-Driven JavaScript screencast](http://www.letscodejavascript.com).

"How To: Tabs" is focused on showing beginning programmers how work is done in a professional environment. It's best for people who have learned the basics of programming (variables, loops, etc.) but are just starting their professional career.

The series covers a wide range of topics, including:

* Version control
* Reproducible builds
* Static code analysis (linting)
* Cross-browser testing
* JavaScript modules
* Test-driven development of front-end code
* The Document Object Model
* Design and Refactoring

In the series, we use these techniques to develop a basic tab-switching effect. This repository contains the source code developed in the series.

The Automated Build:
=======
To run the build:

1. Run `./jake.sh karma` (Mac/Unix) or `jake karma` (Windows) to start the Karma server 
2. Navigate at least one browser to `http://localhost:9876`
3. Run `./jake.sh loose=true` (Mac/Unix) or `jake loose=true` (Windows) each time you want to run the build

- run `./jake.sh` to run the default build or `./jake.sh --tasks` to run the whole build.
- Here's what the build performs each time:
    - lints and tests code automatically
    - generates the directory with all the code for the browser will serve
    - run modules in tests and production code
        - to keep it all clean, it builds to a distribution directory which we could put on a server 

To run the application:

1. Run `./jake.sh run` (Mac/Unix) or `jake run` (Windows) to start a local web server
2. Navigate a browser to `http://localhost:8080`

Cross-Browser Testing:
===========
- By running one command, `./jake.sh`, the build uses Karma to test the application in the following browsers:
    - Chrome
    - Safari
    - Firefox
    - Mobile Safari (on a simulated IOS device)
    - Mobile Chrome (on a simulated Android device)
- The build will fail if one or more of these browsers are not tested. In order to stop this from happening, use `./jake.sh loose=true` and the tests will simply show a warning message.
 
Test-Driven JavaScript
==============
- TDD is used to thoroughly to test how the web application interacts with the DOM 
    - Hides all content except active tab
    - Marks the active tab with the appropriate CSS
    - Shows correct tab when activated upon click