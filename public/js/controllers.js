'use strict';

/* Controllers */
function navigationCtrl($scope, $location) {
     //required to high light the active navigational point
    $scope.location = $location;

}

function ResumeCtrl($scope) {

    //Note: add pop-up to encourage editing

    //Initial resume data setup
    $scope.Resume = {
        name: "Matt Lovan",
        email: "mattlovan@gmail.com",
        phone: "208.871.2928",
        address: "834 Johnson Street, Suite 808",
        location: "Victoria, BC 1N4 V8W",
        Sections: [
            {SectionTitle: "Projects",
                SectionItems: [
                    {title: "mattlovan.com", description: "demos, projects, etc."},
                    {title: "comparetreatment.herokuapp.com", description: "Tool for patients to compare their current treatments to public Medicare data"}
                ]},
            {SectionTitle: "Education",
                SectionItems: [
                    {title: "University of Idaho", description: "Bachelors of Science, Business Information Systems"}
                ]},
            {SectionTitle: "Professional Experience",
                SectionItems: [
                    {title: "FAST Enterprises", description: "Fast Enterprises develops web-based revenue management software for government agencies. Their product is a multi-tier application utilizing SQL Server, VB.NET, and jQuery to provide a platform for AGILE development. Consultants at FAST Enterprises are responsible for all phases of the SDLC, including gathering requirements, development, testing and documentation."}
                ]}
        ]

    };

    //SECTION buttons
    $scope.addSection = function () {
       $scope.Resume.Sections.push({SectionTitle: "", SectionItems: [{title: "", description: ""}]})
    };
    $scope.deleteSection = function (index) {
        $scope.Resume.Sections.splice(index, 1)
    };

    //SECTION ITEM buttons
    $scope.addSectionItem = function (parentindex) {
       $scope.Resume.Sections[parentindex].SectionItems.push({title: "", award: ""})
    };
    $scope.deleteSectionItem = function (parentindex, index) {
        $scope.Resume.Sections[parentindex].SectionItems.splice(index, 1)
    };


    //DOCUMENT buttons
    $scope.saveDocument = function () {
        $scope.editMode = false;
    };
    $scope.cancelDocument = function () {

        $scope.editMode = false;
    };

}

function AboutCtrl($scope) {

    $scope.slide = 'one'

}

function GithubCtrl($scope, $http) {

    var now = new Date()

    $scope.refreshGitData = function() {
         $http({method: 'GET', url: 'https://api.github.com/repos/magrelo/Homepage/commits', headers : {'If-Modified-Since': $scope.modified}})

             .success(function(data, status, headers, config) {

                $scope.commits = data;
                $scope.status = status;
                $scope.time = now.getTime();
                console.log('http success');

            })

             .error(function(data, status) {

                $scope.commits = data || $scope.commits;
                $scope.status = status;
                $scope.time = now.getTime();
                console.log('http error');


            });
    };

    $scope.refresh = function () {

        console.log('start refresh logic');

        if($scope.commits){

            console.log(' commits!');
            $scope.modified = now.toUTCString()

        }
        else{

            console.log(' no commits');
            var basedate = new Date('1984-08-10')
            $scope.modified = basedate.toUTCString()
        }

        console.log('end refresh logic');
        console.log('time:');
        console.log($scope.modified);

        $scope.refreshGitData();
    }


    if(!$scope.commits){
        $scope.refresh()
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