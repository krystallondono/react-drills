import React, {Component} from 'react';

class NewTask extends Component{
    constructor(props){
      super(props);
  
      this.state ={
        input: ""
      }
  
      this.handleAddNew = this.handleAddNew.bind(this);
    }
  
    handleChange(val){
      this.setState({input: val})
    }
  
    handleAddNew(){
      this.props.add(this.state.input);
      this.setState({input: ''})

    }
  
  
  
    render(){
    return (
      <div className="App">
        <input value={this.state.input} placeholder="Enter new task"
      onChange={e => this.handleChange(e.target.value)}
      />
      <button onClick={this.handleAddNew}>Add Task</button>
      </div>
      );
    }
  
    
  }
  
  export default NewTask;