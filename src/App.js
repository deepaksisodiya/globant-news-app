import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/Home'
import News from './components/News'
import TopNews from './components/TopNews'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/topNews">Top News</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/news/:newsId?">
              <News />
            </Route>
            <Route path="/topNews">
              <TopNews />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
