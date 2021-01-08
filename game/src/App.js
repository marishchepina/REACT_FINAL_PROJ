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


  handleLinkChoise = (nuber) => {
    console.log(nuber)
  }


  render() {
    return (
      <Router>
        <div className='container'>
          <MenuToggle
            onToggle={this.toggleMenuHandler}
            isOpen={this.state.menu}
          />
          <Menu
            allWords={this.state.allWords}
            isOpen={this.state.menu}
            onClick={this.handleLinkChoise}
          />

          {/*<ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>*/}



          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/showWord">
              <ShowWord wordSet={this.state.allWords[0].wordSet} />
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



export default App;
