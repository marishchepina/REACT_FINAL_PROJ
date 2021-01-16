import React, { useState } from 'react';
import AllWordsList from './data'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowWord from './components/ShowWord/ShowWord'
import MenuToggle from './components/MenuToggle/MenuToggle'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'


function App() {
  const [menu, setMenu] = useState(false)
  const [activeLesson, setActiveLesson] = useState(AllWordsList[0])
  const [wordToShow, setwordToShow] = useState(activeLesson[0]);


  const toggleMenuHandler = () => {
    setMenu(!menu)
  }



  const handleLinkChoise = (linkNuber) => {

    let i = 0
    let intervalId = 0
    setMenu(false)
    setActiveLesson(AllWordsList[linkNuber - 1])
    setwordToShow(activeLesson[0])
    intervalId = setInterval(() => {
      setwordToShow(activeLesson[i])
      i++
      if (i === activeLesson.length) {
        i = 0
        clearInterval(intervalId)
      }
    }, 5000);
  }



  return (
    <Router>
      <div className='container'>
        <MenuToggle
          onToggle={toggleMenuHandler}
          isOpen={menu}
        />
        <Menu
          allWords={AllWordsList}
          isOpen={menu}
          onClick={handleLinkChoise}
        />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route><ShowWord word={wordToShow} /></Route>
        </Switch>
      </div>
    </Router >
  )
}

export default App;
