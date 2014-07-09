angular.module('app', [])
  .controller('madLibs', function($scope) {
    $scope.data = {
      female_name: "",
      job_title: "",
      tedious_task: "",
      dirty_task: "",
      celebrity: "",
      useless_skill: "",
      adjective: "",
      obnoxious_celebrity: "",
      huge_number: "",
      gender: "male",
      gender_pronoun: pronoun
    };
    var pronoun = whichGender(gender);
    function whichGender(gender) {
      if (gender === "male") {
        return "he";
      } else {
        return "she";
      }
      }
    }
  });
