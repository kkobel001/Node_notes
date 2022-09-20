import React from 'react';
import NewNote from './NewNote/NewNote';
import SingleNote from './SingleNote/SingleNote';


const infoNotes= [
    {
        id:'1234',
        title: "Wykąpac psa",
        body: "pamietaj zeby psa wykąpac"
    },
    {
        id:'4556',
        title: "zrobic zakupy",
        body: "pamietaj zeby kupic mleko"
    },
]
const deleteNotes= (id) => infoNotes.filter(notes=> notes.id !== id);
const addNote =(note)=> {
    const notes =[...infoNotes, note]
    notes=infoNotes;
}

const Notes = () => {

    return (
        <div> 
        <p>Moje notatki: </p>  
        <NewNote addnote={(note)=>addNote(note)}  />
       {infoNotes.map((note)=> (
        <SingleNote
            key={note.id}
            title={note.title} 
            body={note.body} 
            id={note.id}
            onDelete={deleteNotes}
         />
       ))}
    </div>
    )
}
   
export default Notes;