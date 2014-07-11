angular.module('app', [])
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
      gender: "male"
    };
  });

// I attempted to add a function in here to update the pronoun,
// but it wasn't getting called when I changed the radio button.
// Instead I made the terribly ugly and unDRY ng-if thing.
// It wasn't worth it.

// something like adding gender_pronoun to the $scope.data object
// then creating a function that checks the value of gender an
// sets the pronoun.