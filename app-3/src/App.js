import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      filterCousins: '',
      cousins: ['Gigi', 'Paola', 'Daniel', 'Andres', 'Jordana', 'Silver']
    }
  }

  handleChange(val){
    this.setState({filterCousins: val })
  }

  render(){
    let showMyCousins = this.state.cousins.filter((e, i) => {return e.includes(this.state.filterCousins)})
    .map((e, i) => {
      return <h2 key={i}>{e}</h2>;})
   
    return(
      <div className = 'App'>
        <input type= 'text' onChange = {(e) => this.handleChange(e.target.value)}/>
        {showMyCousins}
      </div>
    )
  }

}

export default App;
