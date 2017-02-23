/**
 * Theory in Practice angular app definition
 *
 * @module app
 */


// Declare and configure module
angular
    .module('theory-in-practice', ['ui.router', 'ngRoute'])
    .config([
        '$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider',
        function($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {

            // Index Page
            $stateProvider.state('home', {
                url: '/',
                templateUrl: 'src/templates/home.html'
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
