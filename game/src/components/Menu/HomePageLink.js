import React from 'react'

function HomePageLink() {
    return (
        <li
            onClick={goToHomePage}>
            <a className="fa fa-arrow-up" aria-hidden="true"></a>
        </li>
    )
}

export default HomePageLink
