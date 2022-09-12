const express = require('express');
const router= express.Router();

const testActions = require('../actions/api/notes')




router.get('/notes', notesAction.getAllNotes);
router.get('/notes/{id}', notesAction.getNote);
router.post('/notes', notesAction.saveNote);
router.put('/notes', notesAction.updateNote);
router.delete('/notes', notesAction.deleteNote);







module.exports=router;