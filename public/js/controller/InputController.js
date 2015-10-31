app.controller("InputController", function($scope, $http){
    $scope.rrRating = {};
    
    $scope.submitrrRating = function(){
        $http.post("/api/restrooms", $scope.rrRating)
            .then(function(response){
                $scope.rrRating = {};
            });
    };
});