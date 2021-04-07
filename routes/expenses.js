const express = require('express');
const Expense = require('../models/Expense');
const Person = require('../models/Person');
const router = express.Router();

// tuk sme na /expenses

//get all expenses
router.get('/', async (req, res) => {
  res.json({ expenses: await Expense.find({}) });
  //res.render('expenses/index',{expenses: await Expense.find({}),persons : await Person.find({})})
});

//post new expense
router.post('/', async (req, res) => {
  const expense = new Expense({
    title: req.body.title,
    cost: req.body.cost,
    category: req.body.category,
    isMade: req.body.isMade,
    person: req.body.personId,
  });

  const person = await Person.findById(expense.person);
  person.expensesCost += expense.cost;

  try {
    await person.save();
    const newExpense = await expense.save();
    res.json(newExpense);
  } catch (error) {
    console.log(error);
  }
});

//edit expense
router.put('/:id', async (req, res) => {
  let expense;
  try {
    expense = await Expense.findById(req.params.id);

    (expense.title = req.body.title),
      (expense.cost = req.body.cost),
      (expense.category = req.body.category),
      (expense.person = req.body.person);

    await expense.save();

    res.redirect('/expenses');
  } catch (err) {
    if (expense == null) {
      res.redirect('/');
    } else {
      console.log(err);
      res.redirect(`/expenses/${expense.id}`);
    }
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    res.render('expenses/edit', {
      expense: expense,
      persons: await Person.find({}),
    });
  } catch (error) {
    res.redirect('/expenses');
  }
});

//delete expense
router.delete('/:id', async (req, res) => {
  let expense;
  try {
    expense = await Expense.findById(req.params.id);
    const person = await Person.findById(expense.person);
    person.expensesCost -= expense.cost;
    await person.save();
    await expense.remove();
    res.json({ msg: 'Expense removed' });
  } catch (err) {
    if (expense == null) {
      res.status(404).json({ msg: 'Contact not found' });
    } else {
      res.status(500).send('Server Error');
    }
  }
});

// get add new expense
router.get('/new', async (req, res) => {
  res.render('expenses/new', {
    expense: new Expense(),
    persons: await Person.find({}),
  });
});

module.exports = router;
