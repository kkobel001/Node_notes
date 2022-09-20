import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SingleNote = ({title,body, onDelete}) => {
    const [showNote, setShowNote] = useState(false);

    const handleClick = () => {
        setShowNote(!showNote);
      };
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
        <button className='delete' onClick={onDelete}>Usuń</button>
    </div>
        
        
       

       
       

)
}


SingleNote.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
  };


export default SingleNote;

