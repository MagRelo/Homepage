'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };

    }]);

angular.module('myApp.directives', []).
  directive('selectOnClick', function () {
    // Linker function
    return function (scope, element, attrs) {
        element.click(function () {
            element.select();
        });
    };
});

