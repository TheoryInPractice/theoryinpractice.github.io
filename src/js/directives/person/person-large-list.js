/**
 * Directive for a list of people.
 *
 * @module personLargeList
 */
angular.module('theory-in-practice').directive('personLargeList', [function() {

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/person/person-large-list.html',
        scope: { contents: '=', title: '=' }
    };

}]);