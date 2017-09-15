/**
 * Controller for the events archive page.
 *
 * @module EventsArchiveController
 */
angular.module('theory-in-practice')
    .controller('EventsArchiveController', ['$scope', 'events', function($scope, events) {

        $scope.events = events;

    }]);