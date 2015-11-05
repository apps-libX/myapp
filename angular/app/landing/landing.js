(function(){
    "use strict";

    angular.module('app.controllers').controller('LandingCtrl', function($scope, $rootScope, $state){
        $scope.title = $state.current.data.pageName;
        $scope.test = 'ok';
    });

})();
