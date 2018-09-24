/**
 * Events directive.
 *
 * @module events
 */
angular.module('theory-in-practice').directive('events', [function() {

    const UPCOMING = 'upcoming';
    const MONTHS = 3;
    const PREV_MONTHS = 1;

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/events/events.html',
        scope: { contents: '=' },
        link: function(scope, element, attrs) {

            var recent = new Date();
            var horizon = new Date();
            horizon.setMonth(now.getMonth() + MONTHS);
            recent.setMonth(now.getMonth() - PREV_MONTHS);

            scope.upcoming = UPCOMING in attrs;
            scope.items = scope.contents.filter(function(item) {
                var start = new Date(item.start);
                if (scope.upcoming) {
                    return start > recent && start < horizon;
                }
                else {
                    return start < recent;
                }
            });

        }
    };

}]);
