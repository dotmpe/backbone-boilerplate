Fork. Whishlist:

- CoffeeScript. In different scenario's? 
  Currently build from JS source using CoffeScript tooling (grunt).
- Maybe lazy loading module build. See modulr.
- Multiple modules? Need some additional time to analyze requirements or use of
  seed project.

Maybe look at different branches for var. types of project seed?

Currently Almond makes it build to a JS and CSS packages (and a source map),
suitable to build your own library.

[![Build Status](https://secure.travis-ci.org/dotmpe/backbone-boilerplate.png)](https://travis-ci.org/dotmpe/backbone-boilerplate)

[![Repository](https://badge.fury.io/gh/dotmpe%2Fbackbone-boilerplate.png)](http://badge.fury.io/gh/dotmpe%2Fbackbone-boilerplate)

----

![Boilerplate](https://github.com/backbone-boilerplate/backbone-boilerplate/raw/assets/header.png)

[![Build Status](https://travis-ci.org/backbone-boilerplate/backbone-boilerplate.png?branch=master)](https://travis-ci.org/backbone-boilerplate/backbone-boilerplate) [![Coverage Status](https://coveralls.io/repos/backbone-boilerplate/backbone-boilerplate/badge.png)](https://coveralls.io/r/backbone-boilerplate/backbone-boilerplate) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/backbone-boilerplate/backbone-boilerplate?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Backbone Boilerplate
====================

This boilerplate is the product of much research and frustration.  Existing
boilerplates freely modify Backbone core, lack a build process, and are very
prescriptive; Backbone Boilerplate changes that.

The Backbone Boilerplate is a way of organizing a web application with some
opinionated defaults: such as Backbone, Lo-Dash (Underscore compatibility
build), jQuery, RequireJS, Bower, Grunt, Karma, and the HTML5 Boilerplate
styles.  Built in testing support for: QUnit, Jasmine, and Mocha with Chai.

Organize your application with a logical file structure, develop your
Models/Collections/Views/Routers inside modules, and build knowing you have
efficient code that will not bottleneck your users.

Thanks to our
[Contributors](https://github.com/backbone-boilerplate/backbone-boilerplate/contributors)!  Special Thanks to: [cowboy](http://github.com/cowboy),
[iros](http://github.com/iros), [nimbupani](http://github.com/nimbupani),
[wookiehangover](http://github.com/wookiehangover), and
[jugglinmike](http://github.com/jugglinmike) for helping me create this project.  Extra Special Thanks to: [Paul Guinan](http://bigredhair.com/work/paul.html)
for giving me usage rights to his fantastic Boilerplate character.

## Documentation ##

[Backbone Boilerplate Wiki](https://github.com/backbone-boilerplate/backbone-boilerplate/wiki)

## Getting started ##

The easiest way to get started is to install Git and clone the repository:

``` bash
# Using Git, fetch only the latest commits.  You won't need the full history
# for your project.
git clone --depth 1 https://github.com/backbone-boilerplate/backbone-boilerplate

# Move the repository to your own project name.
mv backbone-boilerplate my-project
```

You will need to download and install [Node.js](http://nodejs.org/) if you want
to use the commands in the following sections.

## Updating dependencies ##

Third party packages may update independently from this main repo, so it's a
good idea to update after fetching.

``` bash
# Install global dependencies.  Depending on your user account you may need to
# gain elevated privileges using something like `sudo`.
npm install -g grunt-cli bower

# Optionally install coveralls (integration is baked in with Travis CI).
npm install -g coveralls

# Install NPM dependencies.
npm install

# Install Bower dependencies.
bower install
```

## Build process ##

The build process consists of numerous Grunt plugin tasks that work together
to optimize your application.

``` bash
# To run the build process, run the default Grunt task.
grunt

# Run a build and test the now optimized assets.
grunt default server:release
```

## Running tests ##

To run tests, simply add `.spec.js` files throughout your application and they
will be automatically picked up by the runner.  You can find example test specs
in the `test` directory.

To run Karma as a daemon:
*Which will automatically run your tests after you save.*

``` bash
grunt karma:daemon
```

To run Karma tests once and output the results:

``` bash
grunt karma:run
```

After either above command is run, code coverage reports will be available in
the `test/coverage` folder.

By default, the test runner is Mocha and Chai.  You can easily change this by
editting the commented regions of the karma configuration in `Gruntfile.js`.

## License ##
Copyright © 2014 Tim Branyen (@tbranyen)  
Licensed under the MIT license.
