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
    setMenu(false)
    setActiveLesson(AllWordsList[linkNuber])
    console.log(AllWordsList[linkNuber])
    setInterval(() => {
      if (i < activeLesson.length) {
        setwordToShow(activeLesson[i].word);
        console.log(activeLesson[i].word)
        i++
      }
      else { i = 0 }
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
