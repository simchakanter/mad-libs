angular.module('app', ['ngAnimate'])
  .controller('madLibs', function($scope) {
    $scope.data = {
      name: "",
      job_title: "",
      tedious_task: "",
      dirty_task: "",
      celebrity: "",
      useless_skill: "",
      adjective: "",
      obnoxious_celebrity: "",
      huge_number: "",
      gender: "male",
      selectGender: function(typeOfWord) {
        if (this.gender === "male") {
          return (typeOfWord === "pronoun") ? "he":"him";
        } else {
          return (typeOfWord === "pronoun") ? "she":"her";
        }
      }
    };
    $scope.submit = function() {
      if ($scope.madLibsForm.$valid) {
        this.validationPassed = true;
      }
    };
    $scope.reset = function() {
      // I know that I shouldn't have this again, but not sure
      // how to store it so it won't get updated.
      this.data = {
        name: "",
        job_title: "",
        tedious_task: "",
        dirty_task: "",
        celebrity: "",
        useless_skill: "",
        adjective: "",
        obnoxious_celebrity: "",
        huge_number: "",
        gender: "male",
        selectGender: function(typeOfWord) {
          if (this.gender === "male") {
            return (typeOfWord === "pronoun") ? "he":"his";
          } else {
            return (typeOfWord === "pronoun") ? "she":"her";
          }
        }
      };
      this.validationPassed = false;
      this.submitted = false;
    };
  });