/**
 * Events directive.
 *
 * @module events
 */
angular.module('theory-in-practice').directive('events', [function() {

    const UPCOMING = 'upcoming';

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/events/events.html',
        scope: { contents: '=' },
        link: function(scope, element, attrs) {

            var now = new Date();

            scope.upcoming = UPCOMING in attrs;
            scope.items = scope.contents.filter(function(item) {
                var start = new Date(item.start);
                return scope.upcoming ? start > now : start < now;
            });

        }
    };

}]);