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

    var resultType



    switch (type){
//        case 'boise':
//            return baseURL + 'q=&geocode=43.62298,-116.2394,20mi&count=100'; break;
        case 'all':
            return baseURL + 'q=&geocode=43.62298,-116.2394,2000mi&count=100'; break;
//        case 'news':
//            return baseURL + 'q=%23news&geocode=43.62298,-116.2394,2000mi&count=100'; break;
//        case 'foodTruck':
//            return baseURL + 'q=from%3Avittletruck%20OR%20from%3APoBoisBoise%20OR%20from%3ASLGridiron%20OR%20from%3ATheShackBoise%20OR%20from%3ABoiseFoodTruck'; break;
        case 'blessed':
            return baseURL + 'q=%23blessed&count=100'; break;
        default:
            return baseURL + 'q=&geocode=43.62298,-116.2394,2000mi&count=100'; break;
    }
};

var createTweetList = function (type, responseData){

    // - if (geo count in type list) && (geo count in responseData) = 0 then return response data
    // - if geo count in responseData) = 0 then return  data

    // - strip from response
    // - if length of list < 6 then add newest non-geo

};


//general search
exports.searchType = function(req, res) {

    var searchType = req.params.searchType;
    console.log("Requested searchType: " + searchType);

    //Do 10 searches
    oauth.get(
        buildTwitterQueryString(searchType),
        accessToken,  //accessToken
        accessTokenSecret, //access token secret
        function (e, data){
            if (e) console.error(e);
            console.log('Returned searchType: ' + searchType + '.'); //console.log(require('util').inspect(data));

            res.send(data);
        });
};
