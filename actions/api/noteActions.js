const Note = require('../../db/note.js');

class NoteActions {
    saveNote(req,res){
        // const newNote = new Note({
        //     title:'Zrobic zakupy',
        //     body:'mleko, woda, cukierki'
        // })
        // newNote.save().then(()=> {
        //     console.log('notatka została zapisana')
        // })
        const title=req.body.titile;
        const body = req.body.body

        res.send('Notatka została stworzona' + title + body)
}
        getAllNotes(req,res){
            res.send('API działa')
}
        getNote(req,res){    
            res.send('Informacja o notatce')
}
         updateNote(req,res){   
             res.send('Notatka zaktualizowana')
}
         deleteNote(req,res){
            const id = req.params.id;
            res.send('Nototka usunięta , Id:' + id)

}}

module.exports= new NoteActions();

