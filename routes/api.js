///*
// * Serve JSON to our AngularJS client
// */
//

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