/**
 * Controller for the software page.
 *
 * @module SoftwareController
 */
angular.module('theory-in-practice')
    .controller('SoftwareController', ['$scope', 'software', function($scope, software) {

        $scope.software = software;

    }]);