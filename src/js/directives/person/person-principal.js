/**
 * Directive for the lab principal.
 *
 * @module personPrincipal
 */
angular.module('theory-in-practice').directive('personPrincipal', [function() {

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/person/person-principal.html',
        scope: { contents: '=' }
    };

}]);