/**
 * Controller for the Home page.
 *
 * @module HomeController
 */
angular.module('theory-in-practice')
    .controller('HomeController', ['$scope', 'home', 'news', function($scope, home, news) {

        $scope.home = home;
        $scope.news = news;

    }]);