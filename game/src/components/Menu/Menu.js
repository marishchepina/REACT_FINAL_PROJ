import React from 'react'
import { withRouter, Link } from "react-router-dom";
import './Menu.css'


const Menu = props => {
    const cls = ['nav']
    if (!props.isOpen) {
        cls.push('nav--close')
    }
    else { cls.push('nav--open') }


    let links = props.allWords.map((el, i) =>
        <li key={i + 1}>
            <Link
                to='/showWord'
                onClick={event => props.onClick(i + 1)}
            >
                Урок {i + 1}
            </Link>
        </li>
    )

    return (
        <nav className={cls.join(' ')}>
            <ul>
                <li onClick={() => {
                    props.history.push('/');
                    props.onClick(1)
                }}
                >
                    <a className="fa fa-arrow-up" aria-hidden="true"></a>
                </li>
                {links}
            </ul>
        </nav >
    )
}


export default withRouter(Menu)