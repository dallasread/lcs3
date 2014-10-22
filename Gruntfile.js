module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
		
		sass: {
	    dist: {
	      files: {
					"tmp/<%= pkg.slug %>.css": ["styles/app.scss"],
					"tmp/<%= pkg.slug %>.vendor.css": ["vendor/styles/vendor.scss"]
	      }
	    }
	  },
		cssmin: {
		  css: {
				options: {
					banner: "/*! <%= pkg.name %> <%= pkg.version %> compiled on <%= grunt.template.today('yyyy-mm-dd') %> */\n",
					keepSpecialComments: 0
				},
				files: {
					"public/<%= pkg.slug %>.min.css": [
						"tmp/<%= pkg.slug %>.vendor.css", 
						"tmp/<%= pkg.slug %>.css"
					]
				}
		  }
		},
		
		coffee: {
			compileJoined: {
				options: {
					bare: true,
					join: true
				},
				files: {
					"tmp/<%= pkg.slug %>.js": [
						"config/config.coffee",
						"config/routes.coffee",
						"config/initializers/*.coffee",
						"app/**/*.coffee",
						"config/boot.coffee"
					]
				}
	    }
	  },
    		
		handlebars: {
			rdr: {
				options: {
					namespace: "RDR.prototype.Templates",
					processName: function(path) {
				    return path.replace(/(\.hbs|app\/views)/g, "");
				  },
					processContent: function(content, filepath) {
				    content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
				    content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '\n');
				    return content;
				  },
				  partialRegex: /^_/
				},
				files: {
					"tmp/<%= pkg.slug %>.rdr.templates.js": ["app/views/**/*.hbs"]
				}
			}
		},
		
    concat: {
      js: {
				options: {
					banner: "/*! <%= pkg.name %> <%= pkg.version %> (Development) compiled on <%= grunt.template.today('yyyy-mm-dd') %> */\n",
				},
				files: {
					"public/<%= pkg.slug %>.js": [
						"vendor/js/rdr.js",
						"vendor/js/*.js",
						"tmp/<%= pkg.slug %>.rdr.templates.js",
						"tmp/<%= pkg.slug %>.js"
					],
				}
      }
    },
		
    uglify: {
      js: {
				options: {
					banner: "/*! <%= pkg.name %> <%= pkg.version %> compiled on <%= grunt.template.today('yyyy-mm-dd') %> */\n",
				},
				files: {
					"public/<%= pkg.slug %>.min.js": ["public/<%= pkg.slug %>.js"]
				}
      }
    },
		
		watch: {
			vendor_js: {
		    files: ["vendor/js/**/*"],
		    tasks: ["js"]
			},
		  js: {
		    files: ["config/**/*.coffee", "app/**/*.coffee"],
		    tasks: ["js"]
		  },
		  vendor_css: {
		    files: ["vendor/styles/**/*"],
		    tasks: ["css"]
		  },
		  css: {
		    files: ["styles/**/*"],
		    tasks: ["css"]
		  },
			rdr: {
				files: ["app/views/**/*.hbs"],
				tasks: ["rdr", "js"]
			}
		}
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	
	grunt.registerTask("default", ["css", "rdr", "js"]);
	grunt.registerTask("css", ["sass", "cssmin"]);
	grunt.registerTask("js", ["coffee", "concat"]);
	grunt.registerTask("rdr", ["handlebars"]);
	grunt.registerTask("build", ["css", "rdr", "js", "uglify"]);

};