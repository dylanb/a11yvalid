module.exports = function(grunt) {
  // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ["tables/*.js"],
            tasks: ["jshint"]
        },
        connect: {
            server: {
                options: {
                    hostname: "0.0.0.0",
                    port: 9876,
                    base: "."
                }
            }
        }
    });

    // grunt plugins
    grunt.loadNpmTasks( "grunt-contrib-watch");
    grunt.loadNpmTasks( "grunt-contrib-connect");

    grunt.registerTask( "server", [ "connect" ] );
    grunt.registerTask( "watcher", [ "watch" ] );

};