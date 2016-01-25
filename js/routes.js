angular.module('router', ['ngRoute'])
.config(function ($routeProvider)
{ //Angular dependancy injection 
    $routeProvider
        .when('/almax', { templateUrl: 'accordionSections/partials/projects/almax.html' })
        .when('/metro', { templateUrl: 'accordionSections/partials/projects/metro.html' })
        .when('/test', { template: '<h3>Test Page</h3>' })

    .otherwise({ templateUrl: 'accordionSections/partials/projects/almax.html' });
    reloadOnSearch: false;

});

