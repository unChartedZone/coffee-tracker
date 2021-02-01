import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Index from './pages/Index';
import CoffeeView from './pages/CoffeeView';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/:id">
          <CoffeeView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
