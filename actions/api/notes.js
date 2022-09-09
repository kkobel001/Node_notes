const Note = require('../../db/models/note')

module.exports= {
    saveNote: function(req,res){
        const newNote = new Note({
            title:'Zrobic zakupy',
            body:'mleko, woda, cukierki'
        })
        
        newNote.save().then(()=> {
            console.log('notatka została zapisana')
        })

        res.send('Strona główna działa')
}}
