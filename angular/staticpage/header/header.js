(function(){
	"use strict";

	angular.module('app.controllers').controller('Staticpage.HeaderCtrl', function($scope, $rootScope, $mdSidenav, $log){

		$scope.$watch(function(){
			return $rootScope.current_page;
		}, function(newPage){
			$scope.current_page = newPage || 'Page Name';
		});

		$scope.openSideNav = function() {
			$mdSidenav('left').open();
		};

	});

})();