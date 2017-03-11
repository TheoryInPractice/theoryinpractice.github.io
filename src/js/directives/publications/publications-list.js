/**
 * Directive for a list of publications.
 *
 * @module publicationsList
 */
angular.module('theory-in-practice').directive('publicationsList', [function() {

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/publications/publications-list.html',
        scope: { contents: '=' }
    };

}]);