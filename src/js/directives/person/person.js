/**
 * Person directive.
 *
 * @module person
 */
angular.module('theory-in-practice').directive('person', [function() {

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/person/person.html',
        scope: { contents: '=' }
    };

}]);