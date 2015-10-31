var mongoose = require("mongoose");
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

var Restrooms = mongoose.model("Restrooms", restroomSchema);

module.exports = Restrooms;