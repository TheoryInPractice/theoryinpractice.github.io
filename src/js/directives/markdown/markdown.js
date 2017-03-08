/**
 * Markdown directive wrapping ng-showdown. Correctly gives the containing
 * div the markdown-body class, which is picked up by GitHub Flavored
 * Markdown (GFM) css.
 *
 * @module markdown.
 */
angular.module('theory-in-practice').directive('markdown', ['$compile', function($compile) {

    return {
        restrict: 'E',
        template: '<div markdown-to-html="contents" class="markdown-body"></div>',
        scope: { contents: '=' },
        link: function(scope, element) {

            // Reference the markdown div that is has rendered html
            // attached via ng-bind-html
            var boundContents = angular
                .element(element)
                .children().first()
                .children().first();

            // Watch for markdown html to be changed and tell angular to compile it
            scope.$watch(
                function() {
                    return boundContents.html();
                },
                function() {
                    $compile(boundContents.contents())(scope);
                }
            );

        }
    };

}]);