const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    humandata: {
        type: JSON
    },
    caltaken:{
        type: Number
    }
}, { timestamps: true })

module.exports = mongoose.model('data', dataSchema);