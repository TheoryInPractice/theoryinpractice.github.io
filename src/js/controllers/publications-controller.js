/**
 * Controller for the publications page.
 *
 * @module PublicationsController
 */
angular.module('theory-in-practice')
    .controller('PublicationsController', ['$scope', 'publications', function($scope, publications) {

        $scope.publications = publications;

    }]);