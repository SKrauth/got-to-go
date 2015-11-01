var express = require("express");
var server = express();
var mongoose = require("mongoose");
var Survey = require("./models/surveyModel");
var Restroom = require("./models/restroomModel");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/restroomdatabase");

server.use(express.static(__dirname+"/public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


server.get("/", function(req, res){
    res.sendFile("public/index.html");
});

//Get and post routes for survey responses.
server.post("/api/survey", function(req, res){
    var survey = new Survey ({
        interested: req.body.interested,
        yes: {
            price: req.body.yes.price,
            time: req.body.yes.time,
            other: req.body.yes.other
        },
        no: {
            increaseInterest: req.body.no.increaseInterest,
            frequency: req.body.no.frequency,
            other: req.body.no.other
        }   
    });
    
    survey.save(function(err){
        if(err)console.log(err);
        res.json(survey);
    });
});

server.get("/api/survey", function(req, res){
    Survey.find({}, function(err, surveys){
        if(err)console.log(err);
        
        res.json(surveys);
    });
});

//Get and post routes for toilet ratings.
server.post("/api/restrooms", function(req, res){
    var restrooms = new Restroom ({
        locAddress: req.body.locAddress,
        locDescription: req.body.locDescription,
        gender: req.body.gender,
        sanitation: {
            clean: req.body.sanitation.clean,
            smell: req.body.sanitation.smell,
            soap: req.body.sanitation.soap,
            toiletPaper: req.body.sanitation.toiletPaper,
            paperTowels: req.body.sanitation.paperTowels
        },
        facilities: {
            numOfStalls: req.body.facilities.numOfStalls,
            numOfSinks: req.body.facilities.numOfSinks,
            privacy: req.body.facilities.privacy
        },
        sundries: {
            tpType: req.body.sundries.tpType,
            dryerOptions: req.body.sundries.dryerOptions,
            soapType: req.body.sundries.soapType
        },
        other: req.body.other
    });
    
    restrooms.save(function(err){
        if(err) console.log(err);
        res.json(restrooms);
    });
});

server.get("/api/restrooms", function(req, res){
    Restroom.find({}, function(err, restrooms){
        if(err)console.error(err);
        
        res.json(restrooms);
    });
});

server.listen(8080, function(){
    console.log("Server is now listening on port 8080");
});