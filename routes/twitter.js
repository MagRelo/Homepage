//twitter api 1.1
var baseURL = 'https://api.twitter.com/1.1/search/tweets.json?';
var requestTokenURL = 'https://api.twitter.com/oauth/request_token';
var accessTokenURL = 'https://api.twitter.com/oauth/access_token';
var consumerKey = 'gJilcWdtcTZIrTWEiVkY7A';
var consumerSecret = 'GTAxzMmy3gXnSG9wibTwB1E9lQbZe2F1DPttoG0hCE';
var accessToken = '826364246-Bfs5UNCXEwcN38iROaqV3O3OQoThAbExHVzI4gKM';
var accessTokenSecret = 'dkHxaCZhpb93kjVf6rNSIKNd7Q9tQxTW2lZD1oz4';

var OAuth = require('oauth');
var oauth = new OAuth.OAuth(requestTokenURL, accessTokenURL, consumerKey, consumerSecret, '1.0A', null, 'HMAC-SHA1');


//general search
exports.searchTerm = function(req, res) {

    var searchTerm = req.params.searchTerm;
    console.log("Requested searchTerm: " + searchTerm);

    //build query
    var twitterQuery = baseURL + 'q=' + searchTerm + '&count=100';
    console.log("Query string: " + twitterQuery);

    //hit twitter API
    oauth.get(
        twitterQuery,
        accessToken,  //accessToken
        accessTokenSecret, //access token secret
        function (e, data){
            if (e) console.error(e);

            console.log('Returned searchTerm: ' + searchTerm + '.'); //console.log(require('util').inspect(data));
             res.send(data);
        });
};
