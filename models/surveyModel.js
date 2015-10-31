var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var surveySchema = new Schema({
    interested: Boolean,
    yes: {
        price: String,
        time: String,
        other: String
    },
    no: {
        increaseInterest: String,
        frequency: String,
        other: String
    }   
});

var Surveys = mongoose.model("Surveys", surveySchema);

module.exports = Surveys;