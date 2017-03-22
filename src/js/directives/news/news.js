/**
 * Directive for displaying a list of news items.
 *
 * @module news
 */
angular.module('theory-in-practice').directive('news', [function() {

    // Number of items to display if recent is specified
    const RECENT_LIMIT = 4;

    // Recent attribute
    const RECENT = 'recent';
    const HORIZONTAL = 'horizontal';
    const FEATURED = 'featured';

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/news/news.html',
        scope: { contents: '=' },
        link: function(scope, element, attrs) {

            scope.featured = FEATURED in attrs;
            scope.limit = (RECENT in attrs) ? RECENT_LIMIT : undefined;
            scope.horizontal = (HORIZONTAL in attrs);

            if (scope.featured) {
                scope.contents = scope.contents.filter(function(item) {
                    return item.featured;
                });
            }

        }
    };

}]);