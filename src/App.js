import React from 'react';
import './App.css';
import HomeView from './pages/HomeView';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PortfolioView from './pages/PortfolioView';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/portfolio">
              <PortfolioView />
            </Route>
            <Route path="/">
              <HomeView />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
