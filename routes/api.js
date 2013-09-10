///*
// * Serve JSON to our AngularJS client
// */
//
//exports.name = function (req, res) {
//  res.json({
//  	name: 'Bob'
//  });
//};
var data = {
    "posts": [
        {
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "title": "Sed egestas",
            "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
        }
    ]
};

var commitLog =  function(status, datetime) {

    var date = new Date()



    var optionsget = {
        host : 'api.github.com', // here only the domain name
        port : 443,
        path : '/repos/magrelo/Homepage/commits', // the rest of the url with parameters if needed
        method : 'GET', // do GET
        headers : {
            'User-Agent' : 'mattlovan.com: commitLog()'
        }
    };

    console.info('Options prepared:');
    console.info(optionsget);
    console.info('Do the GET call');

    // do the GET request
    var body = ''
    var commitLog = [];
    var https = require('https');
    var reqGet = https.request(optionsget, function(res) {
        console.log("statusCode: ", res.statusCode);
        // uncomment it for header details
        //console.log("headers: ", res.headers);

        res.on('data', function(d) {
            body += d;
        });

        res.on('end', function(res) {
            console.info('GET result:');
            console.info(body)

            console.info('commitLog result:');
            commitLog.push({'data': body});
            console.info(commitLog)
            console.info('Call completed');

        });

    });

    reqGet.end();
    reqGet.on('error', function(e) {
        console.error(e);
    });



    console.info('\n\nDone?');




}







exports.posts = function (req, res) {
    var posts = [];
    data.posts.forEach(function (post, i) {
        posts.push({
            id: i,
            title: post.title,
            text: post.text.substr(0, 50) + '...'
        });
    });
    res.json({
        posts: posts
    });
};




exports.commitLog  = function(req, res) {

    var optionsget = {
        host : 'api.github.com', // here only the domain name
        port : 443,
        path : '/repos/magrelo/Homepage/commits', // the rest of the url with parameters if needed
        method : 'GET', // do GET
        headers : {
            'User-Agent' : 'mattlovan.com: commitLog()'
        }
    };

    console.info('Options prepared:');
    console.info(optionsget);
    console.info('Do the GET call');

    // do the GET request
    var body = ''
    var commitLog = [];
    var https = require('https');
    var reqGet = https.request(optionsget, function(res) {
        console.log("statusCode: ", res.statusCode);
        // uncomment it for header details
        //console.log("headers: ", res.headers);

        res.on('data', function(d) {
            body += d;
        });

        res.on('end', function(res) {
            console.info('GET result:');
            console.info(body)

            console.info('commitLog result:');
            commitLog.push({'data': body});
            console.info(commitLog)
            console.info('Call completed');

        });

    });

    reqGet.end();
    reqGet.on('error', function(e) {
        console.error(e);
    });



    console.info('\n\nDone?');

}