import './Tasks.scss'


const Compare = props => {
    return (
        <div className="task">
            <h1>Compare</h1>
        </div>
    )
    /*console.log(props.lesson)
    let images = props.lesson.map((img, imgNum) =>
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
    )*/
}


export default Compare