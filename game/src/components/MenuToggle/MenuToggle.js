import React from 'react'
import './MenuToggle.scss'

const MenuToggle = props => {
    const cls = ['menuToggle', 'fa']
    if (props.isOpen) {
        cls.push('fas')
        cls.push('fa-home')
        cls.push('menuToggle--open')
    } else {
        cls.push('fa-bars')
    }
    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}


export default MenuToggle