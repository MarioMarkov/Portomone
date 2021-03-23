const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    category:{
        type:String
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Person'
      }

})

module.exports = mongoose.model('Expense',expenseSchema)