import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import USSummaryPage from './containers/USSummaryPage';

function App() {
  return (
    <Container className="App">
      <USSummaryPage />
    </Container>
  );
}

export default App;
