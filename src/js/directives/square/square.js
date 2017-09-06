/**
 * Directive for setting an object height=width when the load event is fired.
 */
angular.module('theory-in-practice').directive('square', [function() {

    return function(scope, el) {

        var $element = angular.element(el);
        $element.on('load', function() {
            $element.height($element.width());
        });

    }

}]);
