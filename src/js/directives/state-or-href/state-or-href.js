/**
 * Directive for generating a link with either a ui-state or ng-href.
 *
 * @module stateOrHref
 */
angular.module('theory-in-practice').directive('stateOrHref', [function() {

    return {
        restrict: 'E',
        transclude: true,
        template: '<a ng-if="link.state" ui-state="link.state"><ng-transclude/></a><a ng-if="link.href" ng-href="{{ link.href }}"><ng-transclude/></a>',
        scope: { link: '=' }
    };

}]);