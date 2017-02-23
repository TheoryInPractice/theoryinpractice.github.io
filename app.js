/**
 * Theory in Practice angular app definition
 *
 * @module app
 */


// Declare and configure module
angular
    .module('theory-in-practice', ['ui.router', 'ngRoute'])
    .config([
        '$stateProvider', '$routeProvider',
        function($stateProvider, $routeProvider) {

            // Index Page
            $stateProvider.state('index', {
                url: '/',
                templateUrl: 'src/templates/index.html'
            });

            // Default to index
            $routeProvider.otherwise('/');

    }]);
