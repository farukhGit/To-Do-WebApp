const express = require('express'); 
const app = express();
const port = 8000;


//use express router
app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, (err)=>{
    if(err)
        console.log(`Error listening to port ${port}: ${err}`);  //statement uses interpolation
    else{
        console.log(`server is running on port ${port}`);   
    }
});