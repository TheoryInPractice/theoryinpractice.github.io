/**
 * Service for loading resources from the server.
 *
 * @module resourceLoader
 */
angular.module('theory-in-practice').factory('resourceLoader', ['$http', 'YAML', function($http, YAML) {

    // Cache contents
    $http.defaults.cache = true;

    // Loader
    return {
        get: function(path) {

            // Load and store
            return $http.get(path).then(function(response) {

                return YAML.parse(response.data);

            }).catch(function(err) {

                console.warn('Error loading resource: ', path, err);
                throw err;

            });

        }
    };

}]);