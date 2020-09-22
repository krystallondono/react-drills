import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      cousins: ['Gigi', 'Paola', 'Daniel', 'Andres', 'Jordana', 'Silver']
    }
  }

  

  render(){
    let showMyCousins = this.state.cousins.map((e,i) => {
      return <h4 key={i}>{e}</h4>;
    });

    return(
      <div className='App'>
        {showMyCousins}
      </div>
    );
  }
}

export default App;
