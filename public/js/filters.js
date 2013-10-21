angular.module('mattLovan.filters', [])
    .filter('checkmark', function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';
        };
    })

    .filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length))
                length = 10;

            if (end === undefined)
                end = "";

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).substring(0, length-end.length) + end;
            }
         };
    })
;

