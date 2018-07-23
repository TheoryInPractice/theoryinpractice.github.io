/**
 * Controller for the software page.
 *
 * @module SoftwareController
 */
angular.module('theory-in-practice')
    .controller('SoftwareController', ['$scope', 'software', function($scope, software) {

        // Split software into featured and non-featured
        $scope.featuredSoftware = software.filter(s => s.featured);
        $scope.software = software.filter(s => !s.featured);

    }]);