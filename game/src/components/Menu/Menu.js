import React from 'react'
import {
    withRouter, Link, BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import CompareWord from '../ShowWord/ShowWord';
import './Menu.scss'


const Menu = props => {
    const cls = ['nav']
    if (!props.isOpen) {
        cls.push('nav--close')
    }
    else { cls.push('nav--open') }


    let links = props.allWords.map((el, i) =>
        <Router>
            <li key={i + 1}>
                <Link
                    to='/tasks'
                    onClick={event => props.onClick(i + 1)}
                >
                    Урок {i + 1}<br />
                </Link>

            </li>
        </Router>
    )


    return (
        <nav className={cls.join(' ')}>
            <ul>
                {/*} <li onClick={() => {
                    props.history.push('/');
                    props.onClick(1)
                }}
                >
                    <a className="fa fa-arrow-up" aria-hidden="true"></a>
            </li>*/}
                {links}
            </ul>
        </nav >
    )
}


export default withRouter(Menu)
