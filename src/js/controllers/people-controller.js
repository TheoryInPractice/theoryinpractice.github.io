/**
 * Controller for the People page.
 *
 * @module PeopleController
 */
angular.module('theory-in-practice')
    .controller('PeopleController', ['$scope', 'people', function($scope, people) {

        $scope.people = people;

    }]);