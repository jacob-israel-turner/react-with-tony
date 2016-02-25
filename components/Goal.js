import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo'

const Goal = React.createClass({
  render() {
    const TodoComponents = this.props.todos.map((item, index) => {
      return <Todo name={item.name} done={item.done} key={item.name} markAsDone={this.props.markAsDone.bind(null, index)} />
    })
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>
          {TodoComponents}
        </ul>
      </div>
    )
  }
})

export default Goal
