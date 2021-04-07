const express = require('express');
const Expense = require('../models/Expense');
const Person = require('../models/Person');
const router = express.Router();

// tuk sme na /persons

//get all persons
router.get('/', async (req, res) => {
  res.json({
    persons: await Person.find({}),
  });
});

// get add new person
router.get('/new', (req, res) => {
  res.render('persons/new', { person: new Person() });
});

//post new person
router.post('/', async (req, res) => {
  const person = new Person({ name: req.body.name, income: req.body.income });
  try {
    //check for two same persons
    const newPerson = await person.save();
    res.json({ person: newPerson });
  } catch (error) {
    console.log(error.message);
  }
});

//get person by id
router.get('/:id', async (req, res) => {
  try {
    person = await Person.findById(req.params.id);
    res.json({ person });
  } catch (error) {
    console.log(error);
  }
});

//delete person
router.delete('/:id', async (req, res) => {
  let person;
  try {
    person = await Person.findById(req.params.id);
    expenses = await Expense.find({});
    await person.remove();
    console.log(expenses);

    expenses.forEach(async (expense) => {
      if (expense.person == req.params.id) {
        console.log(expense.person + ' and ' + req.params.id);
        await expense.remove();
      }
    });
    res.redirect('/persons');
  } catch (err) {
    console.log(err);
    if (person == null) {
      res.redirect('/');
    } else {
      res.redirect(`/persons/${person.id}`);
    }
  }
});

module.exports = router;
