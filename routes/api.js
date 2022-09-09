const express = require('express');
const router= express.Router();

const testActions = require('../actions/api/notes')

router.get('/', notesAction.saveNote);


module.exports=router;