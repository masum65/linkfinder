'use strict';
angular.module('linkFinder', ['ngRoute', 'ngSanitize', 'ngCsv', 'data-table', 'checklist-model', 'ui.bootstrap'])
	.config(function($routeProvider){
		$routeProvider.when('/', {
			templateUrl : 'dist/html/getLinks.html',
			controller : 'GetLinksController'
		});
		// .when('/somethingelse', {
		// 	templateUrl : 'somethingelse.html',
		// 	controller : 'somethingelse'
		// })
	})
  .run();