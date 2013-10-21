'use strict';

/* Services */
angular.module('mattLovan.services', []).

    factory('LeaderboardService', function($http) {
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

        var TwitterService = {
            twitter_mgl: function() {

                // $http returns a promise, which has a then function, which also returns a promise
                promise = $http.get('/api/twitter_mgl').then(function (response) {

                    // The then function here is an opportunity to modify the response
                    return  response.data;

                });

                // Return the promise to the controller
                return promise;
            }
        };
        return TwitterService
    })

;

