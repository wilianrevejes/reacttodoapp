import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor='content'>Add new todo:</label>
          <input type="text" id='content' onChange={this.onChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddTodo