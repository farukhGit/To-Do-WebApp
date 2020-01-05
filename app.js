const express = require('express'); 
const app = express();
const port = 8001;

/************** require database module **********/
// const db = require('./config/mongoose');
const db = require('./config/mongoose');
const Task = require('./models/tasks'); //Task will be used to populate database

/***********set up view engine***********/
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());

/***********use express router***********/
app.use('/', require('./routes'));
app.use('/assets', express.static('assets'));


/***********server listening port ***********/
app.listen(port, (err)=>{
    if(err)
        console.log(`Error listening to port ${port}: ${err}`);  //statement uses interpolation
    else{
        console.log(`server is running on port ${port}`);   
    }
});