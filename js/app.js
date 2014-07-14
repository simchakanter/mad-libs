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
      gender: "male",
      selectGender: function(typeOfWord) {
        if (this.gender === "male") {
          return (typeOfWord === "pronoun") ? "he":"his";
        } else {
          return (typeOfWord === "pronoun") ? "she":"her";
        }
      }
    };
  });