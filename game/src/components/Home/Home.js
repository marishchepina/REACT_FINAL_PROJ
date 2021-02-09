import React from 'react'
import './Home.scss'

function Home() {
    return (
        <div className="home">
            <img className="img--resp" src='./img/emotion/music.gif' alt='' />
            <audio src='/audio/muzic.mp3' autoPlay />
        </div>
    );
}

export default Home
