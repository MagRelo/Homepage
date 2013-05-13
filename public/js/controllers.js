'use strict';

/* Controllers */

function ResumeCtrl($scope) {

    //Initial Data Setup
    $scope.Resume = {name: "Matt Lovan",
        email: "mattlovan@gmail.com",
        phone: "208.871.2928",
        address: "834 Johnson Street, Suite 808",
        location: "Victoria, BC 1N4 V8W",
        Section1Title: "Projects",
        Section1Items: [
            {title: "mattlovan.com", description: "demos, projects, etc."},
            {title: "comparetreatment.herokuapp.com", description: "Tool for patients to compare their current treatments to public Medicare data"}
        ],
        Section2Title: "Education",
        Section2Items: [
            {title: "University of Idaho", award: "Bachelors of Science, Business Information Systems", date: "(Dec. 2013)"}
        ],
        Section3Title: "Professional Experience",
        Section3Items: [
            {title: "FAST Enterprises", description: "Fast Enterprises develops web-based revenue management software for government agencies. Their product is a multi-tier application utilizing SQL Server, VB.NET, and jQuery to provide a platform for AGILE development. Consultants at FAST Enterprises are responsible for all phases of the SDLC, including gathering requirements, development, testing and documentation."}
        ]
    };

    $scope.InitialSetup = function () {

        $scope.Resume = {name: "Matt Lovan",
            email: "mattlovan@gmail.com",
            phone: "208.871.2928",
            address: "834 Johnson Street, Suite 808",
            location: "Victoria, BC 1N4 V8W",
            Section1Title: "Projects",
            Section1Items: [
                {title: "mattlovan.com", description: "demos, projects, etc."},
                {title: "comparetreatment.herokuapp.com", description: "Tool for patients to compare their current treatments to public Medicare data"}
            ],
            Section2Title: "Education",
            Section2Items: [
                {title: "University of Idaho", award: "Bachelors of Science, Business Information Systems", date: "(Dec. 2013)"}
            ],
            Section3Title: "Professional Experience",
            Section3Items: [
                {title: "FAST Enterprises", description: "Fast Enterprises develops web-based revenue management software for government agencies. Their product is a multi-tier application utilizing SQL Server, VB.NET, and jQuery to provide a platform for AGILE development. Consultants at FAST Enterprises are responsible for all phases of the SDLC, including gathering requirements, development, testing and documentation."}
            ]
        };

        $scope.editMode = false;
    };

    $scope.saveResume = function () {
        $scope.editMode = false;
    };

    //PROJECTS
    $scope.AddProject = function () {
       $scope.Resume.Section1Items.push({title: "(Title)", description: "(description)"})
    };

    $scope.DeleteProject = function (index, section) {
        $scope.Resume.Section1Items.splice(index, 1)
    };

    //EDUCATION
    $scope.AddAward = function () {
       $scope.Resume.Section2Items.push({title: "(Name)", award: "(Award)", date: "(Date)"})
    };

    $scope.DeleteAward = function (index) {
        $scope.Resume.Section2Items.splice(index, 1)
    };

    //EXPERIENCE
    $scope.AddExperience = function () {
        $scope.Resume.Section3Items.push({title: "(Title)", description: "(description)"})
    };

    $scope.DeleteExperience = function (index) {
        $scope.Resume.Section3Items.splice(index, 1)
    };
}