import './ShowWord.css'


const ShowWord = props => {
    console.log(props)
    return (
        <div className="showWord">
            <div className="showWord__word">
                {word.word}
                <div className="showWord__translate">
                    {word.translate}
                </div>
            </div>
            <div className="showWord__img">
                <img src={word.img} />
            </div>
            <audio src={word.audio} autoPlay />
        </div>
    )
}

export default ShowWord