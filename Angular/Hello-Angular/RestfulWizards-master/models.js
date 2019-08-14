const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/wizard_db', (err)=>{
    console.log(err)
},{useNewUrlParser: true});

var WizardSchema = new mongoose.Schema({
    Name: {type: String, required: [true, "Dude, wizards are supposed to have COOL names"]},
    HasBeard: {type: Boolean, required: true},
    SchoolOfMagic: {type: String, minlength: [2, 'please enter a valid magic type']},
}, {timestamps: true})


module.exports = mongoose.model('Wizard', WizardSchema);



