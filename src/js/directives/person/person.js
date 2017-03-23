/**
 * Person directive.
 *
 * @module person
 */
angular.module('theory-in-practice').directive('person', [function() {

    const BASIC = 'basic';

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/person/person.html',
        scope: { contents: '=' },
        link: function(scope, element, attrs) {

            scope.basic = BASIC in attrs;

        }
    };

}]);