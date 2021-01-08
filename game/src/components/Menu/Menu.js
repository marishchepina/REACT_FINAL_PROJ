import React, { Component } from 'react'
import { render } from 'react-dom'
import './Menu.css'


const Menu = props => {
    console.log(props)

    const cls = ['menu']
    if (!props.isOpen) {
        cls.push('menu--close')
    }

    let links = props.allWords.map(el =>
        <li key={el.lessonNumb}>
            <a href="/">Урок {el.lessonNumb}</a>
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