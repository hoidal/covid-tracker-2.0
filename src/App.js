import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import MainNavBar from './components/nav-bar/MainNavBar';
import USHomePage from './pages/USHomePage';
import StateHomePage from './pages/StateHomePage';

function App() {
  return (
    <Fragment>
      <MainNavBar />
      <Container>
        <Switch>
          <Route exact path='/' component={USHomePage} />
          <Route exact path='/state/:stateName' component={StateHomePage} />
        </Switch>
      </Container>
    </Fragment>
  );
}

export default App;

