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

//edit expense 
router.put('/:id',async (req,res)=>{
    let expense
    try {
        expense = await Expense.findById(req.params.id)
       
            expense.title= req.body.title,
            expense.cost=req.body.cost,
            expense.category=req.body.category,
            expense.person=req.body.person
        
        await expense.save()
        
        res.redirect('/expenses')
    } catch (err) {
        if(expense==null){
            res.redirect('/')
        }else{
            console.log(err)
            res.redirect(`/expenses/${expense.id}`)
        }
    }
})

router.get('/:id/edit',async (req,res)=>{
    try {
        const expense = await Expense.findById(req.params.id)

        res.render('expenses/edit', {expense : expense, persons:await Person.find({}) })
        
    } catch (error) {
        res.redirect('/expenses')
    }
})

//delete expense
router.delete('/:id',async(req,res)=>{
    let expense
    try {
        expense = await Expense.findById(req.params.id)
        await expense.remove()
        res.redirect('/expenses')
    } catch (err) {
        if(expense==null){
            res.redirect('/')
        }else{
            res.redirect(`/expenses/${expense.id}`)
        }
    }
})


// get add new expense
router.get('/new',async (req,res)=>{
    res.render('expenses/new',{expense : new Expense(),persons : await Person.find({})})
})



module.exports = router;