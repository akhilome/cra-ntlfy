import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
