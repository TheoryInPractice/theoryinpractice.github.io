/**
 * Software directive.
 *
 * @module software
 */
angular.module('theory-in-practice').directive('software', [function() {

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/software/software.html',
        scope: { contents: '=' }
    };

}]);