'use strict';

/* Directives */
angular.module('mattLovan.directives', []).
  directive('selectOnClick', function () {
    // Linker function
    return function (scope, element, attrs) {
        element.click(function () {
            element.select();
        });
    }


});

