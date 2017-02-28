/**
 * Service for loading resources from the server.
 *
 * @module resourceLoader
 */
angular.module('theory-in-practice').factory('resourceLoader', ['$http', '$q', function($http, $q) {

    // Previously loaded contents, if any
    var contents = {};

    // Loader
    return {
        get: function(path) {

            // Check to see if already loaded
            if (contents.hasOwnProperty(path)) {
                return $q.resolve(contents[path]);
            }

            // Load and store
            return $http.get(path).then(function(response) {

                var data = response.data;
                contents[path] = data;
                return data;

            }).catch(function(err) {

                console.warn('Error loading resource: ', path, err);
                throw err;

            });

        }
    };

}]);