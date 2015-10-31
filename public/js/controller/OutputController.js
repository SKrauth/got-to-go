app.controller("OutputController", function($http, $scope){
    $scope.rrRating = {};
    
    var.getRating = function(){
        $http.get("/api/restrooms")
            .then(function(response){
                $scope.rrRating = response.data;
            });
    };
    
    getRating();
    
});