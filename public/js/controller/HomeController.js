app.controller("HomeController", function($http, $scope){
//controls ng-Hide to display seperate surveys for the interested/not interested.
    $scope.showCon=function(con){
        $scope.clickOn=con;
    };
    
//sends survey to server to be handled by mongo.
    $scope.survey = {};
    
    var submitSurvey = function(){
        $http.post("/api/surveys", $scope.survey)
            .then(function(response){
                $scope.survey = {};
            });
    };
});