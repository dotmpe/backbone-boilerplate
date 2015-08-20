module.exports = ->
  @loadNpmTasks "grunt-contrib-requirejs"

  # Use requirejs optimizer to package app module to a single file JS file
  # http://requirejs.org/docs/optimization.html
  @config "requirejs",
    release:
      options:
        mainConfigFile: "app/config.js"
        generateSourceMaps: true
        include: ["main"]
        out: "dist/source.min.js"
        optimize: "uglify2"
        baseUrl: "app"

        paths:
          "almond": "../bower_components/almond/almond"

        # Include a minimal AMD implementation shim.
        name: "almond"

        # Wrap everything in an IIFE.
        wrap: true

        # Do not preserve any license comments when working with source maps.
        # These options are incompatible.
        preserveLicenseComments: false
