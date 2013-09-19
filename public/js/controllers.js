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

        if (path == '/consulting') {
            yTransform = 60;
        } else if (path == '/blog') {
            yTransform = 30;
            zTransform = -2;
        } else if (path == '/demos') {
            yTransform = -10;
            zTransform = -4;
        } else if (path == '/contact') {
            yTransform = -140;
            zTransform = -8;
        }

        return {'-webkit-transform': 'rotateX(' + xTransform + 'deg) rotateY(' + yTransform + 'deg) rotateZ(' + zTransform + 'deg)',
            '-moz-transform:': 'rotateX(' + xTransform + 'deg) rotateY(' + yTransform + 'deg) rotateZ(' + zTransform + 'deg)',
            '-ms-transform:': 'rotateX(' + xTransform + 'deg) rotateY(' + yTransform + 'deg) rotateZ(' + zTransform + 'deg)',
            'transform': 'rotateX(' + xTransform + 'deg) rotateY(' + yTransform + 'deg) rotateZ(' + zTransform + 'deg)'
        }

    }

}

function GridCtrl($scope) {

    //terms
    $scope.rowcount = 12;
    $scope.columncount = 12;

    //grid
    $scope.gridIndex = 0;

    //Strategies
    $scope.factorialString = '';

    $scope.buildGrid = function() {
        $scope.grid = [];
        for (var i = 0; i < $scope.rowcount; i++) {
            for (var j = 0; j < $scope.columncount; j++) {
                $scope.grid.push({
                    row: i,
                    column: j,
                    active: false,
                    style: {'top': (i * 20) + 'px', 'left': (j * 20) + 'px'}
                })
            }
        }

        //clear strategies, gridIndex
        $scope.strategies = [];
        $scope.gridIndex = 0;
        $scope.totalCells = $scope.rowcount * $scope.columncount;
        $scope.remainingCells = $scope.totalCells;

        $scope.clearForm();
        $scope.factorialString = '';

        //called by ng-style
        $scope.gridBoxSize = {'height': ($scope.rowcount * 20 + 120) + 'px' };
        $scope.gridPanelSize = {'height': ($scope.rowcount * 20 + 1) + 'px', 'width': ($scope.columncount * 20 +1) + 'px'};
    };

    $scope.addFactor = function(){

        //Create Strategy factorial string
        var runningTotal = 0;
        var remainingCells = 0;
        var factorialString = '';

        //loop through factors
         for(var i = 0; i < $scope.strategies.length; i++){
            runningTotal += Number($scope.strategies[i].product);
            factorialString += '(' + $scope.strategies[i].termOne + ' &times; ' + $scope.strategies[i].termTwo + ') + ';
        }

        //Add the last factor and total
        runningTotal += Number($scope.factorForm.productInput);
        factorialString += '(' + $scope.factorForm.termOneInput + ' &times; ' + $scope.factorForm.termTwoInput + ') = ' + runningTotal;
        remainingCells = remainingCells - Number($scope.factorForm.productInput);

        //Add factor
        $scope.strategies.push({
            termOne: $scope.factorForm.termOneInput,
            termTwo: $scope.factorForm.termTwoInput,
            product: $scope.factorForm.productInput,
            remainingCells: remainingCells,
            factorialString: factorialString
        });

        //Setup cell transform params
        var factorIndex = $scope.strategies.length;
        var factorDirection = factorIndex%4;  //mod4 to throw the grid in four different directions
        var rowTransform;
        var columnTransform;
        var backgroundColor;
        switch (factorDirection){
            case 0:
                rowTransform = -10;
                columnTransform = 40;
                backgroundColor ='#60825c';
                break;
            case 1:
                rowTransform = -40;
                columnTransform = -40;
                backgroundColor ='#dbd78e';
                break;
            case 2:
                rowTransform = -30;
                columnTransform = 40;
                backgroundColor ='#43659e';
                break;
            case 3:
                rowTransform = -20;
                columnTransform = -40;
                backgroundColor ='#825c61';
                break;
        }

        //Set loop start, end
        var gridTransformStart = $scope.gridIndex;
        var gridTransformEnd = $scope.gridIndex + Number($scope.factorForm.productInput);

        //Loop through grid squares and adjust position
        for(var j = gridTransformStart; j < gridTransformEnd; j++){
            var rowPosition =  ($scope.grid[j].row) * 20;
            var columnPosition =  ($scope.grid[j].column) * 20;
            $scope.grid[j].style = {'top': (rowPosition + rowTransform) + 'px', 'left': (columnPosition + columnTransform) + 'px', 'background-color': backgroundColor }
        }

        //clear item
        $scope.clearForm()
        $scope.gridIndex = gridTransformEnd;
        $scope.factorialString = factorialString;
    };

    $scope.clearForm = function (){
        $scope.factorForm = {};
        $scope.factorForm.termOneInput = 0;
        $scope.factorForm.termTwoInput = 0;
        $scope.factorForm.productInput = 0;
    }


    //Initialize
    //$scope.buildGrid();
    $scope.clearForm();
}