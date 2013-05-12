'use strict';

/* Controllers */

function ResumeCtrl($scope) {

    //Initial Data Setup
    $scope.Resume = {name: "Matt Lovan",
        email: "mattlovan@gmail.com",
        phone: "208.871.2928",
        streetaddress:"834 Johnson Street, Suite 808",
        location: "Victoria, BC 1N4 V8W",
        Section1Title: "Projects",
        Section2Title: "Education",
        Section3Title: "Professional Experience"
    };


//
//    $scope.newResume = function(){
//        $scope.Resume.push({name:$scope.resumename, email:$scope.resumeemail, phone:$scope.resumephone})
//        $scope.resumename = ''
//        $scope.resumeemail = ''
//        $scope.resumephone = ''
//    }
//


    $scope.resetResume = function(){

        $scope.Resume = {name: "Matt Lovan",
            email: "mattlovan@gmail.com",
            phone: "208.871.2928",
            streetaddress:"834 Johnson Street, Suite 808",
            location: "Victoria, BC 1N4 V8W",
            Section1Title: "Projects",
            Section2Title: "Education",
            Section3Title: "Professional Experience"
        };

        $scope.resetEdits()
    }

    $scope.resetEdits = function(){

        $scope.editingName = false;
        $scope.editingEmail = false;
        $scope.editingPhone = false;
        $scope.editingstreetaddress = false;
        $scope.editingLocation = false;
        $scope.editingSection = false;
        $scope.editingSection2 = false;
        $scope.editingSection3 = false;
        $scope.editMode = false;
    }

    $scope.saveResume = function(){

        $scope.resetEdits()
    }

}

