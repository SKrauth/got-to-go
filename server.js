var express = require("express");
var server = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Schema = mongoose.Schema;

var restroomSchema = new Schema ({
    locAddress: String,
    locDescription: String,
    gender: String,
    sanitation: {
        clean: Number,
        smell: Number,
        soap: Boolean,
        toiletPaper: Boolean,
        paperTowels: Boolean
    },
    facilities: {
        numOfStalls: Number,
        numOfSinks: Number,
        privacy: Number
    },
    sundries: {
        tpType: String,
        dryerOptions: String,
        soapType: String
    },
    other: String
});

var Restroom = mongoose.model("Restroom", restroomSchema);

mongoose.connect("mongodb://localhost/restroomdatabase");

server.use(express.static(__dirname+"/public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


server.get("/", function(req, res){
    res.sendFile("public/index.html");
});

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
    
    console.log(restrooms);
    
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