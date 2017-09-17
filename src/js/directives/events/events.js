/**
 * Events directive.
 *
 * @module events
 */
angular.module('theory-in-practice').directive('events', [function() {

    const UPCOMING = 'upcoming';
    const MONTHS = 3;

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/events/events.html',
        scope: { contents: '=' },
        link: function(scope, element, attrs) {

            var now = new Date();
            var horizon = new Date();
            horizon.setMonth(now.getMonth() + MONTHS);

            scope.upcoming = UPCOMING in attrs;
            scope.items = scope.contents.filter(function(item) {
                var start = new Date(item.start);
                if (scope.upcoming) {
                    return start > now && start < horizon;
                }
                else {
                    return start < now;
                }
            });

        }
    };

}]);