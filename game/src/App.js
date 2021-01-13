import React, { useState, useEffect } from 'react';
import AllWordsList from './data'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowWord from './components/ShowWord/ShowWord'
import MenuToggle from './components/MenuToggle/MenuToggle'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'



function App() {
  const [menu, setMenu] = useState(false)
  const [key, setKey] = useState(1)
  const [activeWordSet, setActiveWordSet] = useState(AllWordsList[0].wordSet)


  const toggleMenuHandler = () => {
    setMenu(!menu)
  }


  const handleLinkChoise = (linkNuber) => {
    setMenu(false)
    setKey(Math.random())
    setActiveWordSet(AllWordsList[linkNuber - 1].wordSet)
  }



  return (
    <Router>
      <div className='container'>
        <MenuToggle
          onToggle={toggleMenuHandler}
          sisOpen={menu}
        />
        <Menu
          allWords={AllWordsList}
          isOpen={menu}
          onClick={handleLinkChoise}
        />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route>
            <ShowWord
              key={key}
              wordSet={activeWordSet}
            />
          </Route>
        </Switch>
      </div>
    </Router >
  )
}



export default App;
