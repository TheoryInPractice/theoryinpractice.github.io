/**
 * Featured Content directive. Renders featured content for Theory in Practice.
 *
 * @module groupInfo
 */
angular.module('theory-in-practice').directive('featuredContent', [function() {

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/featured-content/featured-content.html',
        scope: { contents: '=' }
    };

}]);