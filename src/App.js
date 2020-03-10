import React from 'react';
import Header from './components/header/header';
import Container from './components/container/container';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container />
        <Footer />
      </Router>
    </div>
  )
}

export default App;
