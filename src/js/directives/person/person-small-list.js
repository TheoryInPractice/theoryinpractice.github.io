/**
 * Directive for a list of people..
 *
 * @module personSmallList
 */
angular.module('theory-in-practice').directive('personSmallList', [function() {

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/person/person-small-list.html',
        scope: { contents: '=', title: '=' }
    };

}]);