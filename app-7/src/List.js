import React, {Component} from 'react';
import Todo from "./Todo";

class List extends Component {
  render() {
    let list = this.props.tasks.map((el, i) => {
      return <Todo key={i} task={el} />;
    });
    
    return <p>{list}</p>;
  }
}

export default List;