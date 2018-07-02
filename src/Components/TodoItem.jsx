import React from 'react'; //

import TodoEdit from './TodoEdit.jsx'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      isEditing: false
    }
    this.remove= this.remove.bind(this)
    this.edit= this.edit.bind(this)
  }

  remove() {

    this.props.remove(this.props.id)

  }

  edit() {
    this.setState({
      isEditing: true
    })
  }


  render() {
    if(this.state.isEditing) {
      return <TodoEdit title={this.props.todo.title} content={this.props.todo.content}/>
    }
    else{
      return <li>
        <span>{this.props.todo.title} </span> 
        <span>{this.props.todo.content} </span>
        <button onClick={this.remove}>delete</button>
        <button onClick={this.edit}>edit</button>
      </li>
    }
  }
}

export default TodoItem;