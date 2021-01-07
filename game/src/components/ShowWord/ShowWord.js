import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './ShowWord.css'


function ShowWord({ wordSet }) {
    console.log(wordSet)
    const [wordToShow, setwordToShow] = useState(wordSet[0]);

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            if (i < wordSet.length) {
                setwordToShow(wordSet[i]);
                i++
            }
            else { i = 0 }
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <div className="showWord__word">
                {wordToShow.word}
                <div className="showWord__translate">
                    {wordToShow.translate}
                </div>
            </div>

            <div className="showWord__img">
                <img src={wordToShow.img} />
            </div>
            <ReactAudioPlayer src={wordToShow.audio} autoPlay />
        </div>
    )
}

export default ShowWord