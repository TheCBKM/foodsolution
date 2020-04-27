const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var routes = require('./routes')

const app = express();


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', routes);

app.get('/available',(req,res)=>{
    res.send("Yes Available")
}) 

mongoose.connect('mongodb+srv://cbkm:cbkm@cbkm-zokml.mongodb.net/betamanit?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected to mongo")
});
// app.use('*', require('express').static('kafila/index.html'))

// app.get('*', function(req, res){

//     res.status(404).redirect('/');
//   });
const server = app.listen(process.env.PORT || 5000, () => {
});