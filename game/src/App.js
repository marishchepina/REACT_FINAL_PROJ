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
  const [wordToShow, setwordToShow] = useState(activeLesson[0])
  //const [imgToShow, setimgToShow] = useState('')
  const [intervalId, setIntervalId] = useState(0)
  //const requestImageFile = require.context(`./assets/img/4-l21`, true)


  const toggleMenuHandler = () => {
    setMenu(!menu)
    clearInterval(intervalId)
  }



  const handleLinkChoise = (linkNuber) => {
    const tmpActiveLesson = AllWordsList[linkNuber - 1]
    let i = 0
    setMenu(false)


    setActiveLesson(tmpActiveLesson)
    setwordToShow(tmpActiveLesson[0])
    let intervalIdTmp = setInterval(() => {
      setwordToShow(tmpActiveLesson[i])
      //let tmpImgPath = tmpActiveLesson[i].img
      //const image = require('./assets/img/4-l21/' + 1 + '.gif');
      //console.log(tmpImgPath)
      //setimgToShow(image)
      // console.log(imgToShow)
      i++
      if (i === activeLesson.length) {
        i = 0
      }
    }, 2500)
    setIntervalId(intervalIdTmp);
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
