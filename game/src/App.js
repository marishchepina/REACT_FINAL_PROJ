import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import AllWordsList from './data'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Menu.scss'
import MenuToggle from './components/MenuToggle/MenuToggle'
import Home from './components/Home/Home'
import WatchComponent from './components/Tasks/Watch'
import CompareComponent from './components/Tasks/Compare'
import TypeComponent from './components/Tasks/Type'



export default function App() {
  const [menu, setMenu] = useState(false)
  const [task, setTask] = useState(false)
  // const [buttons, setButtons] = useState(false)
  const [activeLesson, setActiveLesson] = useState(AllWordsList[0])
  const [activeWord, setactiveWord] = useState(activeLesson[0])
  const [intervalId, setIntervalId] = useState(0)
  const [success, setsuccess] = useState(false)
  const [defeat, setdefeat] = useState(false)
  const [finished, setfinished] = useState(false)

  const routes = [
    {
      path: "/menu",
      component: Menu,
      routes: [
        {
          path: "/menu/watch",
          component: Watch
        },
        {
          path: "/menu/compare",
          component: Compare
        },
        {
          path: "/menu/type",
          component: Type
        }
      ]
    }
  ];

  const handleWatch = (linkNuber) => {
    console.log(linkNuber)
    setMenu(false)
    setTask(true)
    let i = 0
    const tmpActiveLesson = AllWordsList[linkNuber - 1]
    const tmpWord = tmpActiveLesson[0]
    setActiveLesson(tmpActiveLesson)
    setactiveWord(tmpWord)
    let intervalIdTmp = setInterval(() => {
      setactiveWord(tmpActiveLesson[i])
      i++
      if (i === activeLesson.length) {
        i = 0
      }
    }, 2500)
    setIntervalId(intervalIdTmp);
  }


  const handleCompare = (linkNuber) => {
    setMenu(false)
    setTask(true)
    let i = 0
    if (activeLesson[linkNuber].word === activeWord.word) {
      setsuccess(true)
      i = linkNuber + 1
      if (i < activeLesson.length) {
        setactiveWord(activeLesson[i])
        return
      }
      else {
        console.log("TODO: lesson finished ")
      }
    }
    if (linkNuber + 1 === activeLesson.length) {
      console.log('finish')
      setactiveWord(activeLesson[0])
      return;
    }
  }


  const handleType = (linkNuber) => {
    console.log(linkNuber)
    setMenu(false)
    setTask(true)
  }


  const toggleMenuHandler = () => {
    setMenu(!menu)
    setTask(false)
    clearInterval(intervalId)
  }



  function Menu({ routes }) {

    const cls = ['nav']
    const clsTask = ['task']
    const clsButtons = ['nav__buttons']
    if (!menu) {
      cls.push('nav--close')
    }
    else {
      cls.push('nav--open')
    }
    if (!task) {
      clsTask.push('task--close')
    }
    else {
      clsTask.push('task--open')
    }
    // if (buttons) {
    //  clsButtons.push('nav__buttons--open')
    // }

    const taskButtonsShowHide = (linkNuber) => {
      console.log(this)
      // setButtons(true)
      //this.clsButtons.push('nav__buttons--open')
      //console.log(linkNuber)
    }



    let links = AllWordsList.map((el, i) =>
      <li key={i + 1} onClick={() => taskButtonsShowHide(i + 1)}>
        Урок {i + 1}
        <span className='nav__buttons nav__buttons--open'>
          <Link
            onClick={() => handleWatch(i + 1)}
            key={'watch--' + i} to={`menu/watch`}>
            <i className="far fa-eye"></i>
          </Link>
          <Link
            onClick={() => handleCompare(i + 1)}
            key={'compare--' + i}
            to={`menu/compare`}>
            <i className="fas fa-dice"></i>
          </Link>
          <Link
            onClick={() => handleType(i + 1)}
            key={'type--' + i}
            to={`menu/type`}>
            <i className="fas fa-keyboard"></i>
          </Link>
        </span>
      </li>
    )
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    return (

      <animated.div style={props}>
        <ul className={cls.join(' ')}>
          {links}
        </ul>
        <div className={clsTask.join(' ')}>
          <Switch>
            {
              routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))
            }
          </Switch >
        </div>
      </animated.div>
    );
  }

  function Watch() {
    return (<WatchComponent word={activeWord} />)
  }

  function Compare() {
    return (
      <CompareComponent word={activeWord} lesson={activeLesson} onClick={handleCompare} />);
  }

  function Type() {
    return <TypeComponent />;
  }


  return (
    <Router>
      <div>
        <ul>
          <li> <Link exact="true" to="/"><Home /></Link></li>
          <li>
            <Link to="/menu">
              <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={menu} />

            </Link>
          </li>
        </ul>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}


function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}



