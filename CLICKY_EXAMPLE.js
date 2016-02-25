import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  getInitialState () {
    return {
      count: 0
    }
  },
  handleClick () {
    this.setState({count: this.state.count + 1})
  },
  render() {
    return (
      <div>
        <DisplayClicks count={this.state.count} />
        <button onClick={this.handleClick}>Clicky!</button>
      </div>
    )
  }
})

const DisplayClicks = React.createClass({
  render () {
    return <h1>I have been clicked {this.props.count} times!</h1>
  }
})

ReactDOM.render(<App/>, document.getElementById('app'));
