app.controller("HomeController", function($scope, $http){
//controls ng-Hide to display seperate surveys for the interested/not interested.
    $scope.showCon=function(con){
        $scope.clickOn=con;
    };
    
//sends survey to server to be handled by mongo.
    $scope.survey = {};
    
    $scope.submitSurvey = function(){
        if($scope.survey.interested === "true"){
            $scope.survey.no = {
                increaseInterest: "",
                frequency: "",
                other: "",
            };
        };
        if($scope.survey.interested === "false"){
            $scope.survey.yes = {
                price: "",
                time: "",
                other: "",
            };
        };
        $http.post("/api/survey", $scope.survey)
            .then(function(response){
                $scope.survey = {};
            });
    };
});