import React from 'react';
import PropTypes from 'prop-types';





const SingleNote = ({title,body}) => {

    
    <div className='note'>
        <p>{title}</p>
        <div className='description'>
            {body}
        </div>
            <button>Edytuj</button>
    </div>



}


SingleNote.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
  };


export default SingleNote;

