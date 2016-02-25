import React from 'react';
import ReactDOM from 'react-dom';

import Goal from './components/Goal'

const App = React.createClass({
  getInitialState () {
    return {
      goals: [{
        name: 'First Goal!',
        todos: [{
          name: 'do stuff',
          done: false
        }, {
          name: "do lots of stuff!",
          done: false
        }],
        done: false
      }, {
        name: 'Second Goal!',
        todos: [{
          name: 'do other stuff',
          done: false
        }],
        done: false
      }]
    }
  },
  markTodoAsDone (goalIndex, todoIndex) {
    this.state.goals[goalIndex].todos[todoIndex].done = true
    this.setState(this.state)
  },
  render() {
    console.log(this.state)
    const GoalComponents = this.state.goals.map((item, index, array) => {
      return <Goal name={item.name} todos={item.todos} done={item.done} key={item.name} markAsDone={this.markTodoAsDone.bind(null, index)} />
    })
    return (
      <div>
        <h1>Todo List!</h1>
        {GoalComponents}
      </div>
    )
  }
})

/*
{
  App {
    Overview
    Goal {
      Todo
    }
  }
}
*/

ReactDOM.render(<App/>, document.getElementById('app'));
