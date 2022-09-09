const mongoose = require('mongoose');


const Note = mongoose.model("Note", {
    titile: String,
    body:String
});

module.exports =Note;