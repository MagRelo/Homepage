'use strict';

/* Directives */
angular.module('mattLovan.directives', [])

    .directive('selectOnClick', function () {
        // Linker function
        return function (scope, element, attrs) {
            element.click(function () {
                element.select();
            });
        }})

    .directive('rcSubmit', function($parse){

        return {
            restrict: 'A',
            require: 'form',
            link: function (scope, formElement, attributes, formController) {

                var fn = $parse(attributes.rcSubmit);

                formElement.bind('submit', function (event) {
                    // if form is not valid cancel it.
                    if (!formController.$valid) return false;

                    scope.$apply(function() {
                        fn(scope, {$event:event});
                    });
                });
            }
        };

    });






