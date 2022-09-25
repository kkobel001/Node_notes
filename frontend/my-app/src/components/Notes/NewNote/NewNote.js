import React,{useState} from 'react';

const NewNote = (props) => {
    const [showForm, setShowForm]=useState(false);
    const[title, setTitle]= useState('');
    const [description,setDescription]=useState('');

    const changeTitleChandler=(e)=>{
        const value = e.target.value;
        setTitle(value)
    }

    const changeDescriptionChandler=(e)=>{
        const value = e.target.value;
        setDescription(value)
    }

    const addNote=()=> {
        const note ={
            title:title,
            body:description
        };
        props.onAdd(note)
        setTitle('');
        setDescription('');
        setShowForm(false)
    }
    return(

        showForm ? (
            <div className='note'>
                <label>Tytuł</label>
                <input type="text" value={title} onChange={changeTitleChandler}/>
                <label>Opis</label>
                <input type="area"  value={description} onChange={changeDescriptionChandler}/>
                <button onClick={()=> addNote}>Dodaj notatkę</button>
            </div>
        ):(
            <button onClick={(setShowForm(true))}>Dodaj nowa notatkę</button>
        ) 
    )
}
export default NewNote