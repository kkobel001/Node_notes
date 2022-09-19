import React from 'react';
import PropTypes from 'prop-types';

const SingleNote = ({title,body, onDelete}) => {

    <div className='note'>
        <p>{title}</p>
        <div className='description'>
            {body}
        </div>
            <button className='delete' onClick={onDelete}>Usuń</button>
    </div>
}


SingleNote.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
  };


export default SingleNote;

