import React, { Component } from 'react'
import Todos from './Todos';
import AddTodo from './AddTodo';

class TodoApp extends Component {
  state = {
    todos: [
      { id: 1, content: 'learn react' },
      { id: 2, content: 'play tarkov' }
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className='TodoApp container'>
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodoApp