import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SingleNote = ({title,body, onDelete, onEdit,id}) => {
    const [showNote, setShowNote] = useState(false);

    const handleClick = () => {
        setShowNote(!showNote);
      };

      const editHandler=()=>{
        onEdit({
            title:title,
            body:body,
            id:id
        })
      }

    return(

    <div className='note'>
        <p onClick={handleClick}>{title}</p>
        {
            showNote ?
            <div className='description'>
                {body}
            </div>
            : null
        }
        <button className='delete' onClick={onDelete(id)}>Usuń</button>
        <button className='Edytuj' onClick={editHandler}>Edytuj</button>

    </div>
        
        
       

       
       

)
}


SingleNote.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    onDelete:PropTypes.func,
    onEdit:PropTypes.func,
  };


export default SingleNote;

