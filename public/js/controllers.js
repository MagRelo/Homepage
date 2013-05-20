'use strict';

/* Controllers */
function navigationCtrl($scope, $location) {
     //required to high light the active navigational point
    $scope.location = $location;

}





function ResumeCtrl($scope) {

    //Initial Data Setup
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
    $scope.listApps = function() {
        $http({method: 'GET', url: 'https://api.github.com/repos/magrelo/Homepage/commits'}).
            success(function(data, status, headers, config) {
                $scope.commits = data;                  //set view model
            }).
            error(function(data, status, headers, config) {
                $scope.commits = data || "Request failed";
                $scope.status = status;
            });
    }

//    $scope.showApp = function(id) {
//        $http({method: 'GET', url: './api.php?action=get_app&id=' + id, cache: $templateCache}).
//            success(function(data, status, headers, config) {
//                $scope.appDetail = data;               //set view model
//                $scope.view = './Partials/detail.html'; //set to detail view
//            }).
//            error(function(data, status, headers, config) {
//                $scope.appDetail = data || "Request failed";
//                $scope.status = status;
//                $scope.view = './Partials/detail.html';
//            });
//    }

    //$scope.view = './Partials/Github.html'; //set default view
    $scope.listApps();

    var date  = new Date()
    $scope.time = date.getTime()
}
GithubCtrl.$inject = ['$scope', '$http', '$templateCache'];