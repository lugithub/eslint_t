module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        eslint: {
            options: {
                configFile: 'conf/eslint.json',
                rulePaths: ['conf/rules'],
                quiet: true
            },
            validate: ['./file.js']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-eslint');


    // Default task(s).
    grunt.registerTask('default', ['eslint']);

};