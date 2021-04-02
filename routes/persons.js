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

//delete person
router.delete('/:id',async(req,res)=>{
    let person
    try {
        person = await Person.findById(req.params.id)
        expenses = await Expense.find({});
        await person.remove()
        console.log(expenses);
        
        expenses.forEach(async expense => {
            
            if(expense.person ==     req.params.id){
                console.log(expense.person+" and " +req.params.id)
                await expense.remove();
            }
        });
        res.redirect('/persons')
    } catch (err) {
        console.log(err);
        if(person==null){
            res.redirect('/')
        }else{
            res.redirect(`/persons/${person.id}`)
        }
    }
})


module.exports = router;