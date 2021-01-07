import React, { Component } from 'react'
import './Menu.css'

const links = [1, 2, 3]

class Menu extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href="/">
                        Урок {link}
                    </a>
                </li>
            )
        })
    }
    render() {
        const cls = ['menu']
        if (!this.props.isOpen) {
            cls.push('menu--close')
        }
        return (
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}


export default Menu