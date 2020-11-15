const express = require('express');
const router = express.Router();
const app = express();
const index = require('./routes/index')
//const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts')
//mongoose
//mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
//.then(() => console.log('connected,,'))
//.catch((err)=> console.log(err));
//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/',index);
app.set('view engine','ejs');
app.get('/',(req,res) => {
    res.render('index');
})
app.use('/users',require('./routes/users'));
app.get('/',(req,res) => {
    res.render('users');
})

app.listen(3000); 