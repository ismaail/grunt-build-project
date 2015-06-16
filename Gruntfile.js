module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		// Minify & concatenate CSS files
		cssmin: {
			combine: {
				files: {
					"build/css/style.min.css": [
						"public/lib/bootstrap-css/css/bootstrap.min.css",
						"public/lib/fontawesome/css/font-awesome.min.css",
						"public/css/style.css"
					]
				}
			}
		},
		// Minify & concatenate JS files
		uglify: {
			dist: {
				options: {
					mangle: true
				},
				files: [
					{
						"build/js/script.min.js": [
							"public/js/script.js",
							"public/js/google-analytics.js"
						]
					}
				]
			}
		},
		// Update css/js files path
		processhtml: {
			dist: {
				files: [
					{"build/index.html": "public/index.html"}
				]
			}
		},
		// Copy font files
		npmcopy: {
			fontawesome: {
				options: {
					srcPrefix: ""
				},
				files: {
					"build/fonts": "public/lib/fontawesome/fonts/*"
				}
			},
			customfonts: {
				options: {
					srcPrefix: ""
				},
				files: {
					"build/fonts": "public/fonts/*"
				}
			}
		},
		replace: {
			html: {
				src: "build/index.html",
				dest: "build/index.html",
				replacements: [{
					from: "example.dev",
					to: "ismaail.com"
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-npmcopy');
	grunt.loadNpmTasks('grunt-text-replace');

	grunt.registerTask("build", ["cssmin", "uglify", "processhtml", "npmcopy", "replace"]);
};
