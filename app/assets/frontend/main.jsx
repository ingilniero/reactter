import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';

import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

class App extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('home');

  if (reactNode) {
    ReactDOM.render(
      <Router history={history}>
        <Route component={App}>
          <Route path='/' component={Index} />
        </Route>
      </Router>
    , reactNode);
  }
}

$(documentReady);
