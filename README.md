# got-to-go

This project was inspired by some of the ideas I walked away from Startup Gainesville 2015 with. I was curious to see if I could create something that would allow me to collect marketing information, which seemed like one of the more powerful things web developers could do to contribute to the early stages of a startup. I also wanted to know what it would take to run an app, and what kind of things people valued in an app, as apps seemed like really popular ideas at the startup weekend. I ran with the public bathroom finder idea because I thought it would create some fun and interesting coding challenges once I started to try to develop a functional version of the app. Thus v1.0 of Got To Go was born.

### Sample Code

```JavaScript
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
```

When I first wrote the server side post routes and models for the survey I decided I wanted to try and stick my answers into one object. There were seperate questions in my survey for if you were interested in the app and for if you weren't, which I would display or hide with ng-show. This created some problems once I tried to run my post route on the front end. Rather than creating a blank object like I assumed the hidden questions would they created nothing and as a result I got a lot of "cannot read property of undefined" errors.

This was my solution to that problem. I won't claim it's elegant, but now when some fills out the "yes" side of the survey I plug in blanks for the "no" side before the $http.post and as a result I can keep one route on my server side.
