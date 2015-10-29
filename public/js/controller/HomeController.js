app.controller("HomeController", function($scope){
    $scope.yes = false;
    $scope.no = false;
    
    $scope.showCon=function(con){
        $scope.clickOn=con;
    };
});