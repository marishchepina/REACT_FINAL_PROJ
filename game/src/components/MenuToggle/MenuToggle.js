import React from 'react'
import './MenuToggle.css'

const MenuToggle = props => {
    const cls = ['menuToggle', 'fa']
    if (props.isOpen) {
        cls.push('fa-times')
        //cls.push('menuToggle--open')
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