import React from  'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Components/Homepage.jsx';
import Dashboard from './Components/Dashboard.jsx';
//import './src/style/main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'my routed react app'
    }
  }

  render() {
    return <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/"> Hompage </Link></li>
            <li><Link to="/dashboard"> Dashboard </Link></li>
          </ul>
        </nav>
      <h1>{this.state.title}</h1>
      <Route exact path="/" component={Homepage} />
      <Route path="/dashboard" component={Dashboard} />
      </div>
      </Router>
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<Main/>, document.getElementById('root'));