/**
 * Markdown directive wrapping ng-showdown. Correctly gives the containing
 * div the markdown-body class, which is picked up by GitHub Flavored
 * Markdown (GFM) css.
 *
 * @module markdown.
 */
angular.module('theory-in-practice').directive('markdown', [function() {

    return {
        restrict: 'E',
        template: '<div markdown-to-html="contents" class="markdown-body"></div>',
        scope: { contents: '=' },
    };

}]);