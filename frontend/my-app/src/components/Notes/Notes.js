import React, {useState} from 'react';
import NewNote from './NewNote/NewNote';
import SingleNote from './SingleNote/SingleNote';
import Modal from 'react-modal';
import EditNote from './EditNote/EditNote';

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

const addNote=(note) => {
    const notes =[...infoNotes, note]
    notes=infoNotes;
};

const editNote=(note) =>{

    const notes =[...infoNotes, note]

    const index= notes.findIndex(item => item.id === note.id)
    if(index >=0){
        notes[index]=note;
        notes=infoNotes;


    }


};

const Notes = () => {
    const [isOpen, setShowOpen]=useState(false);

    const showModal=()=> {
        setShowOpen(!isOpen);
    
    }
  
    return (
        <div> 
        <p>Moje notatki: </p>  
        <NewNote onAdd={(note)=>addNote(note)}  />
        <Modal isOpen={isOpen} constentLabel="Edytuj notatkę" onChange={showModal}>
            <EditNote onEdit={note =>EditNote(note)} />
            <button onCLick={setShowOpen}>Anuluj</button>
        </Modal>
       {infoNotes.map((note)=> (
        <SingleNote
            key={note.id}
            title={note.title} 
            body={note.body} 
            id={note.id}
            onDelete={deleteNotes}
            onEdit={(note)=> editNote(note)}
         />
       ))}
    </div>
    )
}
   
export default Notes;