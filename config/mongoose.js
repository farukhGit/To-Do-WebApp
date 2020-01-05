const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks_db', {useNewUrlParser : true,
                                                  useUnifiedTopology : true  
                                                });

const db = mongoose.connection;

db.on('error', console.error.bind('Database connection failed.'));
db.once('open', ()=>{
    console.log('Success connecting to the tasks list database.');
});