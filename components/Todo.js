import React from 'react';
import ReactDOM from 'react-dom';

const Todo = React.createClass({
  render() {
    let check
    if (this.props.done === true) {
      check = 'X'
    } else {
      check = <button onClick={this.props.markAsDone}>X</button>
    }
    return (
      <li>{check}{this.props.name}</li>
    )
  }
})

export default Todo
