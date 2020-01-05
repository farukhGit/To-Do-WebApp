const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    description: {
        type : String,
        required : true
    },
    date: {
        type : Date,
        required : true
    },
    type: {
        type : String,
        required : true
    }
}, {timestamps : true});


const Task = mongoose.model('Task', taskSchema);
module.exports = Task;


