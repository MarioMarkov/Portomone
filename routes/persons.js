const express = require('express');
const Expense = require('../models/Expense');
const Person = require('../models/Person');
const router = express.Router();

// tuk sme na /persons

//get all persons
router.get('/', async(req, res)=>{
    res.render('persons/index',{persons: await Person.find({}),expenses: await Expense.find({})})
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