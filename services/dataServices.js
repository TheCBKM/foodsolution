const dataSchema = require('../models/data');

const getData = function (params) {
    return dataSchema.find(params).exec();
}

const saveData = function (productObj) {
    
    let prod = new dataSchema(productObj);
    
    return prod.save();
}


const gettoday = function (params) {
    console.log((new Date(Date.now())).toISOString().split('T')[0])
    return dataSchema.find({
        "user":params.user       
    }).sort({ startDate: 1 }).exec();
}

module.exports = {
    getData,
    saveData, 
    gettoday
}