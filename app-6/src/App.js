import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      input: "",
      list: []
    }

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleChange(val){
    this.setState({input: val})
  }

  handleAddTask(){
    this.setState({list: [...this.state.list, this.state.input], input: ''})
  }



  render(){
    let list = this.state.list.map((e, i) => {
      return <Todo key={i} task={e} />;
    });

  return (
    <div className="App">
      <input value={this.state.input} placeholder="Enter new task"
    onChange={e => this.handleChange(e.target.value)}
    />
    <button onClick={this.handleAddTask}>Add Task</button>
     {list}
    </div>
    );
  }

  
}

export default App;
