var elixir = require('laravel-elixir');
require('./tasks/angular.task.js');
require('./tasks/bower.task.js');
require('laravel-elixir-livereload');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix){
	'use strict';

	mix
		.angular('./angular/**/')
		.sass('./angular/**/**/**/*.scss', 'public/css')
		.copy('./angular/**/**/**/*.html', 'public/views/');
});

/*
elixir(function(mix){
	mix
		.bower()
		.angular('./angular/')
		.less('./angular/!**!/!*.less', 'public/css')
		.copy('./angular/dashboard/!**!/!*.html', 'public/views/dashboard/')
		.copy('./angular/app/!**!/!*.html', 'public/views/app/')
		.copy('./angular/static/!**!/!*.html', 'public/views/static/')
		.copy('./angular/directives/!**!/!*.html', 'public/views/directives/')
		.copy('./angular/dialogs/!**!/!*.html', 'public/views/dialogs/')
		.livereload([
			'public/js/vendor.js',
			'public/js/app.js',
			'public/css/vendor.css',
			'public/css/app.css',
			'public/views/!**!/!*.html'
		], {liveCSS: true})
		.phpUnit();
});
*/
