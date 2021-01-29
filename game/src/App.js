import React, { useState } from 'react';
import AllWordsList from './data'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowWord from './components/ShowWord/ShowWord'
import CompareWord from './components/ShowWord/ShowWord'
import MenuToggle from './components/MenuToggle/MenuToggle'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'


function App() {
  const [menu, setMenu] = useState(false)
  const [activeLesson, setActiveLesson] = useState(AllWordsList[0])
  const [wordToShow, setwordToShow] = useState(activeLesson[0])
  const [intervalId, setIntervalId] = useState(0)


  const toggleMenuHandler = () => {
    setMenu(!menu)
    clearInterval(intervalId)
  }



  const handleLinkChoise = (linkNuber) => {
    setMenu(false)
    const tmpActiveLesson = AllWordsList[linkNuber - 1]
    const tmpWord = tmpActiveLesson[0]
    //let i = 0
    setActiveLesson(tmpActiveLesson)
    setwordToShow(tmpWord)
    // setwordToShow(tmpActiveLesson[0])
    //let intervalIdTmp = setInterval(() => {
    // setwordToShow(tmpActiveLesson[i])
    //i++
    //if (i === activeLesson.length) {
    //i = 0
    // }
    //}, 2500)
    //setIntervalId(intervalIdTmp);
  }


  const CompareWordChoise = (num) => {
    setMenu(false)
    let i = 0
    if (activeLesson[num].word === wordToShow.word) {
      i = num + 1
      if (i < activeLesson.length) {
        setwordToShow(activeLesson[i])
        return
      }
      else {
        console.log("TODO: lesson finished ")
      }
    }


    if (num + 1 === activeLesson.length) {
      console.log('finish')
      setwordToShow(activeLesson[0])
      return;
    }
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
          <Route>
            <CompareWord
              word={wordToShow}
              activeLesson={activeLesson}
              onClick={CompareWordChoise}
            />
          </Route>
        </Switch>
      </div>
    </Router >
  )
}

export default App;
