import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component{
  render (){ 
    return(
    <div className="App">
      <Image url= {"https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}/>
    </div>
  );
}


}

export default App;
