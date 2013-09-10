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