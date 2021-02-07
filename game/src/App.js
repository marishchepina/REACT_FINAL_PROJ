import React, { useState } from 'react';
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
  const [activeLesson, setActiveLesson] = useState(AllWordsList[0])
  const [activeWord, setactiveWord] = useState(activeLesson[0])
  const [intervalId, setIntervalId] = useState(0)

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

  const handleLinkChoise = (linkNuber) => {
    console.log(linkNuber)
    setMenu(!menu)
    const tmpActiveLesson = AllWordsList[linkNuber - 1]
    const tmpWord = tmpActiveLesson[0]
    setActiveLesson(tmpActiveLesson)
    setactiveWord(tmpWord)
  }

  const toggleMenuHandler = () => {
    setMenu(!menu)
    clearInterval(intervalId)
  }

  function Menu({ routes }) {
    const cls = ['nav']
    const clsTasks = ['nav__buttons nav__buttons--open']
    if (!menu) {
      cls.push('nav--close')
    }
    else {
      cls.push('nav--open')
    }

    let links = AllWordsList.map((el, i) =>
      <li key={i + 1}
        onClick={() => handleLinkChoise(i + 1)}
      >
        Урок {i + 1}
        <span className="nav__buttons nav__buttons--open">
          <Link key={'watch--' + i} to={`menu/watch`}><i className="far fa-eye"></i></Link>
          <Link key={'compare--' + i} to={`menu/compare`}><i className="fas fa-dice"></i></Link>
          <Link key={'type--' + i} to={`menu/type`}><i className="fas fa-keyboard"></i></Link>
        </span>
      </li>
    )
    return (
      <ul className={cls.join(' ')}>
        { links}
        <Switch>
          {
            routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))
          }
        </Switch >
      </ul>
    );
  }

  function Watch() {
    handleLinkChoise();
    return (<WatchComponent word={activeWord} />)
  }

  function Compare() {
    return (<CompareComponent />);
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
              {/*<Menu
                allWords={AllWordsList}
                isOpen={menu}
              onClick={handleLinkChoise} />*/}
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



