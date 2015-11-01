app.controller("HomeController", function($scope, $http){
//controls ng-Hide to display seperate surveys for the interested/not interested.
    $scope.showCon=function(con){
        $scope.clickOn=con;
    };
    
//sends survey to server to be handled by mongo.
    $scope.survey = {};
    
    $scope.submitSurvey = function(){
        $http.post("/api/survey", $scope.survey)
            .then(function(response){
                $scope.survey = {};
            });
    };
});