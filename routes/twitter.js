var request = require('request');

var OAuth = require('oauth');

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'gJilcWdtcTZIrTWEiVkY7A',
    'GTAxzMmy3gXnSG9wibTwB1E9lQbZe2F1DPttoG0hCE',
    '1.0A',
    null,
    'HMAC-SHA1'
);


//Matt Lovan tweets
exports.boiseTweets = function(req, res) {

    oauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=&geocode=43.62298,-116.2394,6km&result_type=recent',
        '826364246-Bfs5UNCXEwcN38iROaqV3O3OQoThAbExHVzI4gKM',  //access token
        'dkHxaCZhpb93kjVf6rNSIKNd7Q9tQxTW2lZD1oz4', //access token secret
        function (e, data){
            if (e) console.error(e);
            console.log(require('util').inspect(data));

            res.send(data);

        });
};

//food truck tweets
exports.foodTruckTweets = function(req, res) {

    //q=from%3Avittletruck%20OR%20from%3APoBoisBoise%20OR%20from%3ASLGridiron%20OR%20from%3ATheShackBoise%20OR%20from%3ABoiseFoodTruck
    oauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=from%3Avittletruck%20OR%20from%3APoBoisBoise%20OR%20from%3ASLGridiron%20OR%20from%3ATheShackBoise%20OR%20from%3ABoiseFoodTruck',
        '826364246-Bfs5UNCXEwcN38iROaqV3O3OQoThAbExHVzI4gKM',  //access token
        'dkHxaCZhpb93kjVf6rNSIKNd7Q9tQxTW2lZD1oz4', //access token secret
        function (e, data){
            if (e) console.error(e);
            console.log(require('util').inspect(data));

            res.send(data);

        });

};

//#bsu tweets
exports.bsuTweets = function(req, res) {

    //q=%23bsu&geocode=43.62298,-116.2394,6km
    oauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=%23bsu&geocode=43.62298,-116.2394,6km',
        '826364246-Bfs5UNCXEwcN38iROaqV3O3OQoThAbExHVzI4gKM',  //access token
        'dkHxaCZhpb93kjVf6rNSIKNd7Q9tQxTW2lZD1oz4', //access token secret
        function (e, data){
            if (e) console.error(e);
            console.log(require('util').inspect(data));

            res.send(data);

        });

};

//music tweets
exports.musicTweets = function(req, res) {
    request('http://www.pgatour.com/data/r/current/leaderboard.json', function(error, response, body) {
        console.log('request leaderboard.json')
        res.send(body);
    });
};