import React,{useState} from "react";


const EditNote =(props)=> {
    const[title, setTitle]= useState(props.title)
    const [description,setDescription]=useState(props.body);

    const changeTitleChandler=(e)=>{
        const value = e.target.value;
        setTitle(value)
    }

    const changeDescriptionChandler=(e)=>{
        const value = e.target.value;
        setDescription(value)
    }
    const editNote=()=>{
        const note ={
            title:title,
            body:props.body,
            id:props.id
        }
        ondevicemotion(note)
       
    }

    return(

            <div className='note'>
                <label>Tytuł</label>
                <input type="text" value={title} onChange={changeTitleChandler}/>
                <label>Opis</label>
                <input type="area"  value={description} onChange={changeDescriptionChandler}/>
                <button onClick={()=> editNote}>Zapisz notatkę</button>
            </div>
    )
}

export default EditNote;