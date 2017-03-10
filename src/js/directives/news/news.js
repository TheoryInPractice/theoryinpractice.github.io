/**
 * Directive for displaying a list of news items.
 *
 * @module news
 */


// Number of items to display if recent is specified
const RECENT_LIMIT = 4;

// Recent attribute
const RECENT = 'recent';
const HORIZONTAL = 'horizontal';


angular.module('theory-in-practice').directive('news', [function() {

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/news/news.html',
        scope: { contents: '=' },
        link: function(scope, element, attrs) {
            scope.limit = (RECENT in attrs) ? RECENT_LIMIT : undefined;
            scope.horizontal = (HORIZONTAL in attrs);
        }
    };

}]);