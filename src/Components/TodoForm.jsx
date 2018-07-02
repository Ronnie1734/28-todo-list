import React from 'react';

import uuidv1 from 'uuid/v1';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }) 
  }

  handleSubmit(event) {
    event.preventDefault();
    let { title, content } = this.state; 
    let id = uuidv1();
    this.props.addTodo({ title, content, id });
  }

  render() {
    return <div>
      <h2>Add new todo</h2>
      <form onSubmit={this.handleSubmit}>
        <input name="title" onChange={this.handleChange} type="text" value={this.state.title}/>
        <input name="content" onChange={this.handleChange} type="text" value={this.state.content}/>
        <input type="submit"/>
      </form>
    </div>
  }

}

export default TodoForm;