import React from 'react';

import TodoItem from './TodoItem.jsx';



class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.buildList= this.buildList.bind(this);
    // this.remove= this.remove.bind(this);

  }

  buildList() {
    return this.props.todoList.map(todo => {
      return <TodoItem id={todo.id} remove={this.props.remove} key={todo.id} todo={todo}/>
    }) 
  }

  // remove(id) {
  //   this.props.remove(id)
  // }

  render() {
    return <ul>
      {this.buildList()}
    </ul>
  }

}

export default TodoList;