/**
 * Theory in Practice angular app definition
 *
 * @module app
 */


// Resource Locations
const HOME = 'src/contents/home/home.yml';


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
    .module('theory-in-practice', [
        'ui.router', 'ngRoute', 'ngSanitize', 'mmumshad.yamljs', 'ng-showdown'
    ]).config([
        '$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider',
        '$showdownProvider',
        function($stateProvider, $urlRouterProvider, $uiViewScrollProvider, $showdown) {

            // Index Page
            $stateProvider.state('home', {
                url: '/',
                controller: 'HomeController',
                templateUrl: 'src/templates/home.html',
                resolve: {
                    home: resolveResource(HOME)
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
            $uiViewScrollProvider.useAnchorScroll();

            // Configure showdown
            // Options inspired by https://github.com/showdownjs/ng-showdown/issues/21#issuecomment-163464623
            var options = {
                omitExtraWLInCodeBlocks: true,
                prefixHeaderId: 'user-content-',
                simplifiedAutoLink: true,
                tablesHeaderId: true,
                ghCodeBlocks: true,
                ghCompatibleHeaderId: true,
                parseImgDimensions: true,
                literalMidWordUnderscores: true,
                strikethrough: true,
                tables: true,
                tasklists: true,
                extensions: ['prettify']
            };
            for (var option in options) {
                $showdown.setOption(option, options[option]);
            }

    }]);
