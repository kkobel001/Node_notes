const express = require('express');
const router= express.Router();

const testActions = rwquire('../actions/api/test.js')

router.get('/',testActions.homepage)


module.exports=router;