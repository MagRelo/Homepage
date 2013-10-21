//twitter api 1.1
var baseURL = 'https://api.twitter.com/1.1/search/tweets.json?';
var requestTokenURL = 'https://api.twitter.com/oauth/request_token';
var accessTokenURL = 'https://api.twitter.com/oauth/access_token';
var consumerKey = 'gJilcWdtcTZIrTWEiVkY7A';
var consumerSecret = 'GTAxzMmy3gXnSG9wibTwB1E9lQbZe2F1DPttoG0hCE';
var accessToken = '826364246-Bfs5UNCXEwcN38iROaqV3O3OQoThAbExHVzI4gKM';
var accessTokenSecret = 'dkHxaCZhpb93kjVf6rNSIKNd7Q9tQxTW2lZD1oz4';

//var request = require('request');

var OAuth = require('oauth');
var oauth = new OAuth.OAuth(requestTokenURL, accessTokenURL, consumerKey, consumerSecret, '1.0A', null, 'HMAC-SHA1');

var buildTwitterQueryString = function(type){
    switch (type){
        case 'all':
            return baseURL + 'q=&geocode=43.62298,-116.2394,6km&result_type=recent'; break;
        case 'boise':
            return baseURL + 'q=boise%20idaho&geocode=43.62298,-116.2394,6km'; break;
        case 'news':
            return baseURL + 'q=from%3AIdahoStatesman%20OR%20from%3AKTVBfeed%20OR%20from%3AKBOITV%20OR%20from%3ABoisePD'; break;
        case 'foodTruck':
            return baseURL + 'q=from%3Avittletruck%20OR%20from%3APoBoisBoise%20OR%20from%3ASLGridiron%20OR%20from%3ATheShackBoise%20OR%20from%3ABoiseFoodTruck'; break;
        case 'blessed':
            return baseURL + 'q=%23blessed&geocode=43.62298,-116.2394,6km'; break;
        default:
            return baseURL + 'q=&geocode=43.62298,-116.2394,6km&result_type=recent'; break;
    }
};

//general search
exports.searchType = function(req, res) {

    var searchType = req.params.searchType;
    console.log("Get searchType: " + searchType);

    oauth.get(
        buildTwitterQueryString(searchType),
        accessToken,  //accessToken
        accessTokenSecret, //access token secret
        function (e, data){
            if (e) console.error(e);

            //console.log(require('util').inspect(data));
            console.log('Returned searchType: ' + searchType + '.');

            res.send(data);
        });
};
