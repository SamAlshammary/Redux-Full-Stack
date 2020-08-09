import React, { Component } from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {addTodo, removeTodo, getTodos} from './actionCreators';
import {Route} from 'react-router-dom';
import NewTodoForm from './NewTodoForm';



class TodoList extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     todos: ["Eat", "Sleep", "Go Home"]
     
        // this.removeTodo = this.removeTodo.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     task: ""
        // }

        }
        //what we want to think about is when this component loads we want to go to the database and get all our todos,
        //so we are giong to use the lifecycle method of component did mount
        componentDidMount(){
            //debugger;
            this.props.getTodos();
        }
        handleAdd(val){
            this.props.addTodo(val);
        }
    
    removeTodo(id){
        this.props.removeTodo(id);
        // this.props.dispatch({
        //     type: "REMOVE_TODO",
        //     id
        // })
    }
    render(){
        //debugger;

       let todos = this.props.todos.map((val) => (
       <Todo 
        removeTodo={this.removeTodo.bind(this, val._id)}
        task={val.task} 
        key={val._id}
       />
       ));

        return(
    <div>
           <Route path="/todos/new" component={props => (
               <NewTodoForm {...props} handleSubmit={this.handleAdd} />
           )}/> 
          <Route exact path="/todos" component ={() => <div>{todos}</div>} />
    </div>
        )
    }
}
function mapStateToProps(reduxState){
    //debugger;
    return{
        todos: reduxState.todos
    }
}

// function mapDispatchToProps(dispatch){
//     return{
//         addTodo: function (task){
//             dispatch({
//                 type: "ADD_TODO",
//                 task
//             })
//         }
//     }
// }



export default connect(mapStateToProps, {addTodo, removeTodo, getTodos} )(TodoList);