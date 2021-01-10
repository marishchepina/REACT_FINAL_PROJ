import React, { Component } from 'react';
import AllWordsList from './data'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowWord from './components/ShowWord/ShowWord'
import MenuToggle from './components/MenuToggle/MenuToggle'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'


class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      key: 1,
      allWords: AllWordsList,
      activeWordSet: AllWordsList[0].wordSet
    }
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }


  handleLinkChoise = (linkNuber) => {
    this.setState({
      menu: false,
      key: Math.random(),
      activeWordSet: AllWordsList[linkNuber - 1].wordSet
    })
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
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route>
              <ShowWord
                key={this.state.key}
                wordSet={this.state.activeWordSet}
              />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}


export default App;
