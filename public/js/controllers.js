'use strict';

/* Controllers */
function navigationCtrl($scope, $location) {
     //required to high light the active navigational point
    $scope.location = $location;

    $scope.spinLogo = function(){

        var path = $location.path();
        var xTransform = 0;
        var yTransform = 0;
        var zTransform = 0;
        var fontSize = 100;
        var opacity = .3;

        if (path == '/consulting') {
            xTransform = -32;
            yTransform = 35;
            fontSize = 80;
            opacity = 0;
         } else if (path == '/blog') {
            xTransform = -25;
            yTransform = 27;
            fontSize = 195;
            opacity = .125;
        } else if (path == '/contact') {
            xTransform = 24;
            yTransform = -140;
            fontSize = 66;
            opacity = .25;

        } else {
            xTransform = 20;
            yTransform = -30;
            fontSize = 100;
        }

        return {'-webkit-transform': 'rotateX(' + xTransform + 'deg) rotateY(' + yTransform + 'deg) rotateZ(' + zTransform + 'deg)',
            '-moz-transform:': 'rotateX(' + xTransform + 'deg) rotateY(' + yTransform + 'deg) rotateZ(' + zTransform + 'deg)',
            '-ms-transform:': 'rotateX(' + xTransform + 'deg) rotateY(' + yTransform + 'deg) rotateZ(' + zTransform + 'deg)',
            'transform': 'rotateX(' + xTransform + 'deg) rotateY(' + yTransform + 'deg) rotateZ(' + zTransform + 'deg)',
            'font-size': fontSize +'%',
            'opacity': opacity

        }

    }

}

function GridCtrl($scope) {
    //grid
    $scope.progress = 0;

    //strategy
    $scope.strategy = {
        problemTermOne: 0,
        problemTermTwo: 0,
        problemProduct: 0,
        factors: []
    };



    $scope.buildGrid = function() {

        //called by ng-style
        var gridHeightAdj = 30;
        $scope.gridBoxSize = {'height': ($scope.y * 20 + gridHeightAdj) + 'px' };
        $scope.gridPanelSize = {'height': ($scope.y * 20 + 1) + 'px', 'width': ($scope.x * 20 + 1) + 'px'};

        //build initial shape
        $scope.grid = [];
        for (var i = 0; i < $scope.y; i++) {
            for (var j = 0; j < $scope.x; j++) {

                //grid squares are 20x20px
                var xPosition = i * 20;
                var yPosition = j * 20;

                $scope.grid.push({
                    xPosition: xPosition,
                    yPosition: yPosition,
                    active: false,
                    group: 0,
                    style: {'top': xPosition + 'px', 'left': yPosition + 'px'}
                })
            }
        }

        //reset
        $scope.strategy.factors = [];
        $scope.complete = false;
        $scope.progress = 0;
        $scope.clearForm();
    };

    $scope.addFactor = function(){

        //Set color, loop start, loop end
        var colorGroup = $scope.strategy.factors.length % 5;
        var gridTransformStart = function(){
            for(var i = 0; i < $scope.grid.length; i++) {
                if($scope.grid[i].active == false)
                    return i
            }
            return $scope.grid.length
        };
        var gridTransformEnd = gridTransformStart() + Number($scope.factorForm.productInput);

        //sloppy validation
        $scope.tooMany = false;
        $scope.wrongAnswer = false;
         if($scope.factorForm.termOneInput * $scope.factorForm.termTwoInput !== $scope.factorForm.productInput ){
            $scope.wrongAnswer = true;
            $scope.factorForm.productInput = '';
            return false;
        }
        if($scope.factorForm.termOneInput * $scope.factorForm.termTwoInput > $scope.grid.length - gridTransformStart()){
            $scope.tooMany = true;
            $scope.clearForm();
            return false;
        }

        //Add factor
        $scope.strategy.factors.push(
            {termOne: $scope.factorForm.termOneInput,
             termTwo: $scope.factorForm.termTwoInput,
             product: $scope.factorForm.productInput,
             colorGroup: 'group' + colorGroup,
             percentage: ($scope.factorForm.productInput/$scope.grid.length) * 100
            }
        );

        //loop through grid squares and adjust position
        for(var j = gridTransformStart(); j < gridTransformEnd; j++){
            $scope.grid[j].active = true;
            $scope.grid[j].group = 'group' + colorGroup + ' activeCell';
            $scope.grid[j].style = {'top':($scope.grid[j].xPosition - 15) + 'px',
                                    'left':($scope.grid[j].yPosition - 5) + 'px'}
        }

        //Check completion
        $scope.progress =  (gridTransformStart()/$scope.grid.length) * 100;
        $scope.complete = (gridTransformStart() == $scope.grid.length);

        //clear form
        $scope.clearForm();
    };

    $scope.clearForm = function (){
        $scope.factorForm = {};
        $scope.factorForm.termOneInput = 0;
        $scope.factorForm.termTwoInput = 0;
        $scope.factorForm.productInput = 0;

    };

}

function leaderboardCtrl($scope, LeaderboardService){

    //Service
    function setup(){
        LeaderboardService.leaderboard().then(function(data){
                $scope.setup = data;
                $scope.players =  data.players;
                $scope.courses =  data.courses;
                $scope.header =  data.header;
            },function(errorMessage){
                $scope.errorMessage =  errorMessage;
            }
        )}

    //Control logic
    $scope.setScoringStyle = function(scoringstyle){$scope.scoring = scoringstyle;};
    $scope.moreRows = function (){$scope.rowLimit += 7;};

    function Init(){
        setup()
        $scope.scoring = 'modstable';
        $scope.rowLimit = 15;
    }

    Init()
}