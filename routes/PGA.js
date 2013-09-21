var request = require('request');

//PGA datafiles
exports.leaderboard = function(req, res) {
    request('http://www.pgatour.com/data/r/current/leaderboard.json', function(error, response, body) {
        console.log('request leaderboard.json')
        res.send(body);
    });
};

exports.tournamentSetup = function(req, res) {

//    request('http://www.pgatour.com/data/r/current/setup.json', function(error, response, body) {
//            console.log('request setup.json')
//            res.send(body)
//        }
//    )

};

exports.getScorecard = function(req, res) {

//    var playerID = req.params.playerID;
//    var scorecardURLString = 'http://www.pgatour.com/data/r/current/scorecards/' + playerID + '.json';
//
//    request(scorecardURLString, function(error, response, body) {
//            console.log('scorecard: ' + scorecardURLString);
//            res.send(body)
//        }
//    )

};

