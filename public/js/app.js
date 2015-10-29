var app = angular.module("gotToGoApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl: "/html/home.html",
        controller: "HomeController"
    })
    .when("/input", {
        templateUrl: "/html/input.html",
        controller: "InputController"
    })
    .when("/output", {
        templateUrl: "/html/output.html",
        controller: "OutputController"
    })
    .otherwise({
        redirectTo: "/home"
    })
});