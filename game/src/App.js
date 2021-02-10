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
  const [activeLesson, setActiveLesson] = useState(AllWordsList[0])
  const [activeWord, setactiveWord] = useState(activeLesson[0])
  const [intervalId, setIntervalId] = useState(0)
  const [value, setValue] = useState('')
  const [typed, setTyped] = useState('');

  //const [success, setsuccess] = useState(false)
  //const [defeat, setdefeat] = useState(false)
  //const [finished, setfinished] = useState(false)

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
    }, 4000)
    setIntervalId(intervalIdTmp);
  }


  const handleCompare = (linkNuber) => {
    setMenu(false)
    setTask(true)
    let i = 0
    if (activeLesson[linkNuber].word === activeWord.word) {
      //setsuccess(true)
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


  const handleType = (linkNuber, lessonNumber) => {
    setMenu(false)
    setTask(true)
    console.log(linkNuber)
    const tmpActiveLesson = AllWordsList[linkNuber - 1]
    const tmpWord = tmpActiveLesson[lessonNumber]
    setActiveLesson(tmpActiveLesson)
    setactiveWord(tmpWord)
    console.log(activeWord)
  }


  const handleSubmit = event => {
    let i = 0
    if (value === activeWord.word) {
      for (i = 0; activeLesson.length; i++) {
        if (activeLesson[i].word == value) {
          if (i < activeLesson.length) {
            handleType(1, i + 1);
            return;
          } else {
            //lesson finished
          }
        }
      }
      console.log('tada')
    }
    setValue('')
    event.preventDefault()
  };


  const handleChange = event => {
    setValue(event.target.value);
  };


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



    let links = AllWordsList.map((el, i) =>
      <li key={i + 1}>
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
            onClick={() => handleType(i + 1, 0)}
            key={'type--' + i}
            to={`menu/type`}>
            <i className="fas fa-keyboard"></i>
          </Link>
        </span>
      </li>
    )
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0, transition: 'all 0.1s ease-in' }
    })
    return (
      <div className="taskWrap">
        <animated.div style={props}>
          <ul className={cls.join(' ')}>
            {links}
          </ul >
          <div className={clsTask.join(' ')}>
            <Switch>
              {
                routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))
              }
            </Switch >
          </div>
        </animated.div >
      </div >
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
    return <TypeComponent word={activeWord} onSubmit={handleSubmit} value={value} onChange={handleChange} />;
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



