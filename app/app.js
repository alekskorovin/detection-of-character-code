(function() {
    
    var app = angular.module('customersApp', ['ngAnimate', 'ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'SymbolsController',
                templateUrl: 'app/views/symbols.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());