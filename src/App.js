import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import NationalSummaryPage from './NationalSummaryPage';

function App() {
  return (
    <Container className="App">
      <NationalSummaryPage />
    </Container>
  );
}

export default App;
