import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img className="img--resp" src='./img/emotion/music.gif' alt='' />
            <audio src='/audio/muzic.mp3' />
        </div>
    );
}

export default Home
