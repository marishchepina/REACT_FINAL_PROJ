import './ShowWord.scss'

const ShowWord = props => {
    console.log(props.img)
    return (
        <div className="showWord">
            <div className="showWord__word">
                {props.word.word}
                <div className="showWord__translate">
                    {props.word.translate}
                </div>
            </div>
            <div className="showWord__img">
                <img src={props.word.img} />
            </div>
            <audio src={props.word.audio} autoPlay />
        </div>
    )
}

const CompareWord = props => {
    console.log(props.activeLesson)
    let images = props.activeLesson.map((img, imgNum) =>
        <div className="compareWord__imgWrap"
            key={imgNum}
            onClick={event => props.onClick(imgNum)}>
            <img
                src={img.img}
                className="img--resp" />
        </div>
    )
    return (
        <div className="showWord">
            <div className="showWord__word">
                {props.word.word}
            </div>
            <audio src={props.word.audio} autoPlay />
            {images}
        </div>
    )
}

export default (ShowWord, CompareWord)