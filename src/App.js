// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './about';
import Home from './home';

import TopNav from './components/TopNav';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav></TopNav> 
      </header>
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
