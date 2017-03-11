/**
 * Controller for the People page.
 *
 * @module PeopleController
 */
angular.module('theory-in-practice')
    .controller('PeopleController', ['$scope', 'people', 'join', function($scope, people, join) {

        $scope.people = people;
        $scope.join = join;

    }]);