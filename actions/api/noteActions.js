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
     async getAllNotes(req,res){
        let doc;
        try{
            const doc = await Note.find({})
        }
        catch(err) {
            return   res.status(500).json({message:err.message});
        }
        
            res.status(200).json(doc);          
}
      async  getNote(req,res){    
        const id= req.params.id;

        const note = await Note.findOne({_id:id})
        res.status(200).json(note);          

}
         updateNote(req,res){   
             res.send('Notatka zaktualizowana')
}
         deleteNote(req,res){
            const id = req.params.id;
            res.send('Nototka usunięta , Id:' + id)

}}

module.exports= new NoteActions();

