import React from 'react';

const NewNote = () => {
    return(
        <div className='note'>
            <label>Tytuł</label>
            <input type="text" />
            <label>Opis</label>
            <input type="area" />
            <button >Dodaj notatkę</button>
        </div>
    )
}
export default NewNote