const app = module.exports = require('express')();

app.use('/user', require('./userRoute'))
app.use('/data', require('./dataRoute'))
