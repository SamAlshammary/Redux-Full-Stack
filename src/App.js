import React, { Component } from 'react';
import TodoList from './TodoList';
import {Link, Route, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component{

  render(){

    return(

      <div className='App'>
        <h1>Welcome to the App!</h1>
          <p>
              <Link to='/todos'>See my todos!</Link>
          </p>
          <p>
              <Link to='/todos/new'>Add a todos!</Link>
          </p>
          <Route path='/todos' component={TodoList}/>
          <Route exact path='/' component={() => <Redirect to='/todos' />}/>
      </div>

    )
  }
}

export default App;
