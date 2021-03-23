const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();
//const Person = require('../models/Person')

router.get('/',(req,res)=>{
    res.render('index')
})
module.exports = router;