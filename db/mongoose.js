const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/')

const Note = mongoose.model("Note", {
    titile: String,
    body:String
});

const newNote = new Note({
    title:'tytuł testowy',
    body:'tekst naszej notatki'
})

newNote.save().then(()=> {
    console.log('notatka została zapisana')
})