const Note = require('../../db/models/note')

module.exports= {
    saveNote(req,res){
        const newNote = new Note({
            title:'Zrobic zakupy',
            body:'mleko, woda, cukierki'
        })
        newNote.save().then(()=> {
            console.log('notatka została zapisana')
        })

        res.send('Strona główna działa')
},
        getAllNotes(req,res){
        
            res.send('Strona główna działa')

},

         updateNote(req,res){   
             res.send('Strona główna działa')

},
         deleteNote(req,res){
        
            res.send('Strona główna działa')

}

}
