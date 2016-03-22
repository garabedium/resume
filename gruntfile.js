module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '320px',
            suffix: '@mobile',
            quality: 88
          },
          {
            name: 'medium',
            width: '460px',
            suffix: '@tablet',
            quality: 92
          },
          {
            name: 'large',
            width: '600px',
            suffix: '@desktop',
            quality: 96
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: '_dev/img/',
          dest: '_dev/img/resized'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};