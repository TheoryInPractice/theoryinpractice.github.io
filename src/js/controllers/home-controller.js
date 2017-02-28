/**
 * Controller for the Home page.
 *
 * @module HomeController
 */
angular.module('theory-in-practice')
    .controller('HomeController', ['$scope', 'groupInfo', function($scope, groupInfo) {

        $scope.groupInfo = groupInfo;

    }]);