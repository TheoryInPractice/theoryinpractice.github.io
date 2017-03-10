/**
 * Controller for the news archive page.
 *
 * @module NewsArchiveController
 */
angular.module('theory-in-practice')
    .controller('NewsArchiveController', ['$scope', 'news', function($scope, news) {

        $scope.news = news;

    }]);