/**
 * Events directive.
 *
 * @module events
 */
angular.module('theory-in-practice').directive('events', [function() {

    const UPCOMING = 'upcoming';
    const MONTHS = 3;
    const PREVMONTHS = 1;

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/events/events.html',
        scope: { contents: '=' },
        link: function(scope, element, attrs) {

            let now = new Date();
            let recent = new Date(now.getFullYear(), now.getMonth() - PREVMONTHS, now.getDate());
            let horizon = new Date(now.getFullYear(), now.getMonth() + MONTHS, now.getDate());

            scope.upcoming = UPCOMING in attrs;
            scope.items = scope.contents.filter(function(item) {
                let start = new Date(item.start);
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
