'use strict';



/* Services */
angular.module('mattLovan.services', [])

    .factory('LeaderboardService', function($http) {
        var promise;
        var LeaderboardService = {
            leaderboard: function() {
                if(!promise){
                    // $http returns a promise, which has a then function, which also returns a promise
                    promise = $http.get('/api/leaderboard').then(function (response) {


                        // The then function here is an opportunity to modify the response

                        var tourSetupFile = response.data;
                        var players = tourSetupFile.lb.pds.p;
                        var obj = [];
                        var playerList = [];
                        var courses = tourSetupFile.lb.c.c;
                        var header = {
                            name: tourSetupFile.lb.tn,
                            date: tourSetupFile.lb.lt,
                            totalRounds: tourSetupFile.lb.tr,
                            currentRound: tourSetupFile.lb.rn
                        };

                        //loop through courses
                        for(var i = 0; i < courses.length; i++){

                            var parTotal = 0;
                            var yardageTotal = 0;

                            //loop through holes
                            for(var j = 0 ; j < courses[i].h.length; j++ ){
                                parTotal +=  Number(courses[i].h[j].p);
                                yardageTotal +=  Number(courses[i].h[j].d);
                            }

                            courses[i].parTotal =  parTotal;
                            courses[i].yardageTotal = yardageTotal;
                        }

                        //loop through players
                        for(var i = 0; i < players.length; i++){
                            var modStablefordTotal = 0;
                            var stablefordTotal = 0;
                            var standardTotal = 0;

                            playerList.push(players[i].ln + ', ' + players[i].fn);

                            //loop through holes
                            for(var j = 0 ; j < players[i].h.h.length; j++ ){

                                var score = players[i].h.h[j].sc;
                                var par = courses[0].h[j].p;
                                var modstable = 0;
                                var stable = 0;

                                if(score == '--'){
                                    modstable = '--';
                                    stable = '--';}
                                else{

                                    var diff = score - par;

                                    //modStable
                                    if(diff > 1){modstable = -3}
                                    else if (diff == 1 ){modstable = -1}
                                    else if (diff == 0 ){modstable = 0}
                                    else if (diff == -1){modstable = 2}
                                    else if (diff == -2){modstable = 5}
                                    else if (diff < -2 ){modstable = 8}

                                    //Stable
                                    if(diff > 1){stable = 0}
                                    else if (diff == 1 ){stable = 1}
                                    else if (diff == 0 ){stable = 2}
                                    else if (diff == -1){stable = 3}
                                    else if (diff == -2){stable = 4}
                                    else if (diff == -3){stable = 5}
                                    else if (diff >  -3){stable = 6}

                                    standardTotal = standardTotal + Number(score);
                                    stablefordTotal =  stablefordTotal + stable;
                                    modStablefordTotal = modStablefordTotal + modstable;
                                }

                                players[i].h.h[j].stable =  stable;
                                players[i].h.h[j].modstable =  modstable;
                            }

                            players[i].sc =  standardTotal;
                            players[i].stable =  stablefordTotal;
                            players[i].modstable = modStablefordTotal;
                        }

                        obj  = {
                            players: players,
                            courses: courses,
                            header: header,
                            playerList: playerList
                        }

                        // The return value gets picked up by the then in the controller.
                        return obj;
                    });
                }
                // Return the promise to the controller
                return promise;
            }
        }
        return LeaderboardService
    })

    .factory('TwitterService', function($http) {
        var promise;
        var baseURL = '/api/twitter/';
        return {

           searchTweets: function (type) {
             // $http returns a promise, which has a then function, which also returns a promise
            promise = $http.get(baseURL + type).then(function (response) {
                // The then function here is an opportunity to modify the response
                var am = function(hour){
                    if(hour < 12){return "AM"}
                    return "PM"
                };
                var adjustHour = function(hour){
                    if(hour < 12){return hour.substring(1,2)}
                    return hour - 12;
                };
                var time = function(createdString){
                    return  createdString.substring(0,3) +
                        ', ' + createdString.substring(4,7) +
                        ' ' + createdString.substring(8,10) +
                        ' - ' + adjustHour(createdString.substring(11,13)) +
                        ':' + createdString.substring(14,16) +
                        ' ' + am(createdString.substring(11,13))
                };
                var processTwitterResponse = function(responseData){

                    var processedData = [];

                    angular.forEach(responseData.statuses, function(tweet){

                        this.push({
                            text: tweet.text,
                            time: time(tweet.created_at),
                            user: {
                                name: tweet.user.name,
                                screen_name:  tweet.user.screen_name,
                                profile_image_url: tweet.user.profile_image_url,
                                description: tweet.user.description
                            },
                            geo: tweet.geo

                        });

                    }, processedData);

                    if(processedData.length < 1){
                        processedData = {error: 'no results found'}
                    }

                    return processedData;

                };

                return  processTwitterResponse(response.data);
            });
            // Return the promise to the controller
            return promise;
            },

            examples: {
                regions: ['westcoast','gulfcoast', 'eastcoast'],
                food: ['grilledcheese', 'oysters','IPA', 'waffles'],
                people: ['wizard', 'jerk', 'boss']
            }

        };

     })

;

