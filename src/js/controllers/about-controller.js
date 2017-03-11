/**
 * Controller for the about page.
 *
 * @module AboutController
 */
angular.module('theory-in-practice')
    .controller('AboutController', ['$scope', 'about', function($scope, about) {

        $scope.about = about;

    }]);