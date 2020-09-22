import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import NewTask from './NewTask';
import List from './List';

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      list: []
    }

    this.handleAddTask = this.handleAddTask.bind(this);
  }


  handleAddTask(newtask){
    this.setState({list: [...this.state.list, newtask]})
  }



  render(){
  return (
    <div className="App">
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
    </div>
    );
  }

  
}

export default App;

