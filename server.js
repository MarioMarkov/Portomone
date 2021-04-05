const express = require('express');
const app = express();
const bodyParser = require('body-parser')


const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');
const personsRouter = require('./routes/persons');
const expensesRouter = require('./routes/expenses');
//for delete method in form
const methodOverride = require('method-override')



//  app.set('view engine','ejs');
// app.set('views',__dirname+'/views');
app.set('layout','layouts/layout');
app.use(bodyParser.urlencoded({limit:'10mb',extended:false}))
app.use(methodOverride('_method'))

app.use(expressLayouts);
app.use(express.static('public'));

const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/portomone',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error',err => console.error(err));
db.on('open',()=> console.log('Connected to Mongoose'))




app.use('/',indexRouter);
app.use('/persons',personsRouter);
app.use('/expenses',expensesRouter);

app.listen(process.env.PORT || 5000)




