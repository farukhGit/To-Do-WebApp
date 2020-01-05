const Task = require('../models/tasks'); //Task will be used to populate database
console.log('This is tasks database');  


//defining the home action
module.exports.default = (req, res)=>{
    return res.render('home', {
        title : 'App'
    });
}

module.exports.createNewTask = (req, res)=>{
   Task.create({
       description : req.body.description,
       date : req.body.date,
       type : req.body.type
   }, function(err, newTask){
       if(err){
           console.log('Error in creating the contact', err);
           return;
       }
       console.log('&&&&', newTask);
       return res.redirect('back');
   })
}

module.exports.deleteTask = (req, res)=>{
    
}