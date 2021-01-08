import React, { Component } from 'react';
import AllWordLists4 from './data'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShowWord from './components/ShowWord/ShowWord'
import MenuToggle from './components/MenuToggle/MenuToggle'
import Menu from './components/Menu/Menu'

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      allWords: AllWordLists4
    }
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  render() {

    return (
      <Router>
        <div>
          <MenuToggle
            onToggle={this.toggleMenuHandler}
            isOpen={this.state.menu}
          />
          <Menu
            allWords={this.state.allWords}
            isOpen={this.state.menu}
          />

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>



          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <div id="container">
                <ShowWord wordSet={this.state.allWords} />
              </div>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>


        </div>
      </Router >

    );
  }
}


function Home() {
  return (
    <div className="feedBack">
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
