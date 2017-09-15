/**
 * Controller for the News page.
 *
 * @module NewsController
 */
angular.module('theory-in-practice')
    .controller('NewsController', ['$scope', 'news', 'events', function($scope, news, events) {

        $scope.news = news;
        $scope.events = events;

    }]);