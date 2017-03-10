/**
 * Events directive.
 *
 * @module events
 */
angular.module('theory-in-practice').directive('events', [function() {

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/events/events.html',
        scope: { contents: '=' }
    };

}]);