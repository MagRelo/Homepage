'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('selectOnClick', function () {
    // Linker function
    return function (scope, element, attrs) {
        element.click(function () {
            element.select();
        });
    }

//    .directive('resize', function () {
//        return function (scope, element) {
//           element.css = 'height': ((scope.rowcount * 20) + 60) + 'px' //cells are 20px high,  plus 60px for breathing room)
//        }
//    })
//
//    .directive('resizeGridPanel', function () {
//        return function (scope, element) {
//
//            scope.style = function () {
//                return {
//                    'height': ((scope.rowcount * 20) + scope.rowcount + 1 ) + 'px',
//                    'width': (newValue.w - 100) + 'px'
//                };
//            };;
//
//            w.bind('resize', function () {
//                scope.$apply();
//            });
//        }
//    })

});

