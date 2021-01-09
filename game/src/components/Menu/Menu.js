import React from 'react'
import { withRouter, Link } from "react-router-dom";
import './Menu.css'
//import HomePageLink from './HomePageLink'


const Menu = props => {
    const cls = ['nav']
    if (!props.isOpen) {
        cls.push('nav--close')
    }
    else { cls.push('nav--open') }

    let links = props.allWords.map(el =>
        <li key={el.lessonNumb}>
            <Link
                //to='/showWord'
                to={'/showWord/' + el.lessonNumb}
                onClick={event => props.onClick(el.lessonNumb)}
            >
                Урок {el.lessonNumb}
            </Link>
        </li>
    )

    return (
        <nav className={cls.join(' ')}>
            <ul>
                {/*<li onClick={() => {props.history.push('/');  //props.state.menu = false;}}>
                    <a className="fa fa-arrow-up" aria-hidden="true"></a>
    </li>*/}
                {links}
            </ul>
        </nav >
    )
}


export default withRouter(Menu)