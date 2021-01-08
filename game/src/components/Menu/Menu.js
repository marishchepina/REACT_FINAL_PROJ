import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import './Menu.css'


const Menu = props => {

    const cls = ['nav']
    if (!props.isOpen) {
        cls.push('nav--close')
    }
    else { cls.push('nav--open') }

    let links = props.allWords.map(el =>
        <li key={el.lessonNumb}>
            <Link to="/showWord" onClick={event => props.onClick(el.lessonNumb)}>
                Урок {el.lessonNumb}
            </Link>
        </li>
    )

    return (
        <nav className={cls.join(' ')}>
            <ul>
                {links}
            </ul>
        </nav>
    )
}


export default Menu