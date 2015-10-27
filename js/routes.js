angular.module('router', ['ngRoute'])
.config(function ($routeProvider) { //Angular dependancy injection 
    $routeProvider
        .when('/almax', { templateUrl: 'partials/almax.html' })
        .when('/metro', { templateUrl: 'partials/metro.html' })
         .when('/rimages', { templateUrl: 'partials/rimages.html' })
         .when('/angulair', { templateUrl: 'partials/angulair.html' })

        .when('/test', { template: '<h3>Test Page</h3>' })

    .otherwise({ templateUrl: 'partials/almax.html' });
});

//The below code is 




(function (angular) {
    'use strict';
    angular.module('anchorScrollExample', [])
      .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
        function ($scope, $location, $anchorScroll) {
            $scope.goToAnchor = function () {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash('partialsAnchor');

                // call $anchorScroll()
                $anchorScroll();
            };
        }]);
})(window.angular);
