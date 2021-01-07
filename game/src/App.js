import React, { Component } from 'react';

//import AllWordLists4 from './data'
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
      words: [
        {
          'id': 'clever',
          'word': 'clever',
          'translate': 'розумний',
          'img': './img/4-l1/1.gif',
          'audio': './audio/4-l1/1.mp3'
        },
        {
          'id': 'niece',
          'word': 'niece',
          'translate': 'племінниця',
          'img': './img/4-l1/2.jpg',
          'audio': './audio/4-l1/2.mp3'
        },
        {
          'id': 'nephew',
          'word': 'nephew',
          'translate': 'племінник',
          'img': './img/4-l1/3.jpg',
          'audio': './audio/4-l1/2.mp3'
        },
        {
          'id': 'friendly',
          'word': 'friendly ',
          'translate': 'дружелюбний',
          'img': './img/4-l1/4.gif',
          'audio': './audio/4-l1/4.mp3'
        },
        {
          'id': 'helpful',
          'word': 'helpful',
          'translate': 'корисний',
          'img': './img/4-l1/5-1.jpg',
          'audio': './audio/4-l1/5.mp3'
        }
      ]
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
          <Menu isOpen={this.state.menu} />

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

          {/* <div id="container">
        <ShowWord wordSet={this.state.words} />
    </div*/}


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
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
