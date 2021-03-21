const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    income:{
        type:Number,
    },
    expensesCost:{
        type:Number,
        default: 0
    }

})

module.exports = mongoose.model('Person',personSchema)