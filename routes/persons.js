const express = require('express');
const Person = require('../models/Person');
const router = express.Router();


//get all persons
router.get('/', (req, res)=>{
    res.render('persons/index')
})

// get add new person
router.get('/new',(req,res)=>{
    res.render('persons/new',{person : new Person()})
})

//post new person
router.post('/',async (req,res)=>{
    
    const person = new Person({name: req.body.name, income:req.body.income})
    try {
        const newPerson = await person.save();
        res.redirect(`/persons`)
    } catch (error) {
        res.render('persons/new',{
            person:person
        })
    }
})

module.exports = router;