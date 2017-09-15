/**
 * Group Info directive. Renders information about Theory in Practice.
 *
 * @module groupInfo
 */
angular.module('theory-in-practice').directive('groupInfo', [function() {

    return {
        restrict: 'E',
        templateUrl: 'src/js/directives/group-info/group-info.html',
        scope: { contents: '=' }
    };

}]);