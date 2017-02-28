/**
 * Theory in Practice angular app definition
 *
 * @module app
 */


// Resource Locations
const GROUP_INFO = 'src/contents/home/group-info.json';


/**
 * Wrapper function for the resolving resources
 * through the resource loader service.
 *
 * @param   {String}  path Path to load.
 * @returns {Array}        Angular function that returns loader.get(path).
 */
function resolveResource(path) {
    return ['resourceLoader', function(loader) {
        return loader.get(path);
    }];
}


// Declare and configure module
angular
    .module('theory-in-practice', ['ui.router', 'ngRoute', 'ngSanitize'])
    .config([
        '$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider',
        function($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {

            // Index Page
            $stateProvider.state('home', {
                url: '/',
                controller: 'HomeController',
                templateUrl: 'src/templates/home.html',
                resolve: {
                    groupInfo: resolveResource(GROUP_INFO)
                }
            });

            // About Page
            $stateProvider.state('about', {
                url: '/about',
                templateUrl: 'src/templates/about.html'
            });

            // Events Page
            $stateProvider.state('events-archive', {
                url: '/events-archive',
                templateUrl: 'src/templates/events-archive.html'
            });

            // News Page
            $stateProvider.state('news', {
                url: '/news',
                templateUrl: 'src/templates/news.html'
            });

            // News Archive page
            $stateProvider.state('news-archive', {
                url: '/news-archive',
                templateUrl: 'src/templates/news-archive.html'
            });

            // People Page
            $stateProvider.state('people', {
                url: '/people',
                templateUrl: 'src/templates/people.html'
            });

            // Publications Page
            $stateProvider.state('publications', {
                url: '/publications',
                templateUrl: 'src/templates/publications.html'
            });

            // Software Page
            $stateProvider.state('software', {
                url: '/software',
                templateUrl: 'src/templates/software.html'
            });

            // Default to index if not found
            $urlRouterProvider.otherwise('/');

            // Configure anchor scroll to scroll to top on view change
            $uiViewScrollProvider.useAnchorScroll()

    }]);
