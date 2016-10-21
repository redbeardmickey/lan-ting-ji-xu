module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      js: {
        files: [
          {
             expand: true,
             cwd: 'node_modules/animejs',
             src: 'anime.min.js',
             dest: 'build/js/libs'
          },
          {
             expand: true,
             cwd: 'node_modules/jquery/dist/',
             src: 'jquery.min.js',
             dest: 'build/js/libs'
          },
          {
            expand: true,
            cwd: 'src/',
            src: ['**'],
            dest: 'build/'
          }

        ]
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'build/'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['copy']);

  // grunt.registerTask('connect', ['connect']);


};
