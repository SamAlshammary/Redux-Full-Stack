const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/todos-backend");//connecting 
mongoose.set("debug", true)//to see mongo quires being executed for debugging
mongoose.Promise = Promise; 

//Schema
const todoSchema = new mongoose.Schema({
    task: String
})
//model
const Todo = mongoose.model("Todo", todoSchema);


module.exports = Todo;
