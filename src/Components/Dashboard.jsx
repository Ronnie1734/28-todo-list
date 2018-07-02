import React from 'react';

import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: 'test title', 
          content: 'test content',
          id: 'test-id'
        }
      ]
    }
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(id) {

    let newList = this.state.todos.filter(todoItem => {

      return id !== todoItem.id

    })

    this.setState({
      todos: newList
    })

  }

  addTodo(todo) {
    console.log(todo);
    this.state.todos.push(todo);
    this.setState({
      todos: this.state.todos
    })
    console.log(this.state);
  }

  render() {
    return <div>
      <TodoForm addTodo={this.addTodo}/>
      <TodoList todoList={this.state.todos} remove={this.remove}/>
    </div>
  }
}

export default Dashboard;