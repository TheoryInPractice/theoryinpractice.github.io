/**
 * Controller for the Home page.
 *
 * @module HomeController
 */
angular.module('theory-in-practice')
    .controller('HomeController', ['$scope', 'home', function($scope, home) {

        $scope.home = home;

    }]);