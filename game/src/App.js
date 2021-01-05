import React, { Component } from 'react';
//import './App.css';
//import AllWordLists4 from './data'
import ShowWord from './components/ShowWord/ShowWord'


class App extends Component {
  state = {
    words: [
      {
        'id': 'clever',
        'word': 'clever',
        'translate': 'розумний',
        'img': './img/4-l1/1.gif'
      },
      {
        'id': 'niece',
        'word': 'niece',
        'translate': 'племінниця',
        'img': './img/4-l1/2.jpg'
      },
      {
        'id': 'nephew',
        'word': 'nephew',
        'translate': 'племінник',
        'img': './img/4-l1/3.jpg'
      },
      {
        'id': 'friendly',
        'word': 'friendly',
        'translate': 'дружелюбний',
        'img': './img/4-l1/4.gif'
      },
      {
        'id': 'helpful',
        'word': 'helpful',
        'translate': 'корисний',
        'img': './img/4-l1/5-1.jpg'
      }
    ]
  }



  render() {


    return (
      <div id="container">
        <ShowWord wordSet={this.state.words} />
      </div>
    );
  }
}

export default App;
