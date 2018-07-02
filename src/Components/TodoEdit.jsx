import React from 'react';

class TodoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content
    }
  }

  render() {

    return <form>
      <input type="text" value={this.props.title}/>
      <input type="text" value={this.props.content}/>
      <input type="submit" value="update"/>
      <button> cancel </button>
    </form>

  }

}

export default TodoEdit;