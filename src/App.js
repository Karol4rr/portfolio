import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} onClick={window.scrollTo(0, 0)} />
        <Route path='/services' exact component={Services} onClick={window.scrollTo(0, 0)} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
