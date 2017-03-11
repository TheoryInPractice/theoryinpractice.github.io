/**
 * Events directive.
 *
 * @module events
 */
angular.module('theory-in-practice').directive('events', [function() {

    const RECENT = 'recent';
    const LIMIT  = 4;

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/events/events.html',
        scope: { contents: '=' },
        link: function(scope, element, attrs) {
            scope.limit = (RECENT in attrs) ? LIMIT : undefined;
        }
    };

}]);