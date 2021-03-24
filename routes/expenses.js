const express = require('express');
const Expense = require('../models/Expense');
const Person = require('../models/Person');
const router = express.Router();


// tuk sme na /expenses

//get all expenses
router.get('/',async (req, res)=>{
    res.render('expenses/index',{expenses: await Expense.find({}),persons : await Person.find({})})
})

//post new expense
router.post('/',async (req,res)=>{
    
    const expense = new Expense({
            title: req.body.title,
            cost:req.body.cost,
            category:req.body.category,
            person:req.body.person
        })

    const person = await Person.findById(expense.person)
    person.expensesCost += expense.cost;
  
    

    try {
        await person.save();
        const newExpense = await expense.save();
        res.redirect('/expenses')
        
    } catch (error) {
       console.log(error)
       res.render('expenses/new',{
        expense:expense
    })
    }
})
// get add new person
router.get('/new',async (req,res)=>{
    res.render('expenses/new',{expense : new Expense(),persons : await Person.find({})})
})



module.exports = router;