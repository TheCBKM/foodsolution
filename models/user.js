const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        
        type: String,
    },
    phone: {
        type: Number,
        required: true,
    },
    pass: {
        type: String,

    },
    height: {
        type: Number,

    },
    weight: {
        type: Number,
   
    },
    gender:{
        type: String,
    },
    age: {
        type: Number,
     
    },
    bmr: {
        type: Number,
     
    },
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema);