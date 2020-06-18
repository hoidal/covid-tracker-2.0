import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Container from 'react-bootstrap/Container';
import USHomePage from './containers/USHomePage';
import StateHomePage from './containers/StateHomePage';

function App() {
  return (
    <Container className="App">
      <Switch>
        <Route exact path='/' component={USHomePage} />
        <Route exact path='/state/:stateName' component={StateHomePage} />
      </Switch>
    </Container>
  );
}

export default App;

