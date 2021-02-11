import './Tasks.scss'


const Compare = props => {
    console.log(props.lesson)
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
        <div className="watch watch--compare">
            <div className="watch__word">
                {props.word.word}
            </div>
            {/**  <audio src={props.word.audio} autoPlay />*/}
            {images}
        </div>
    )
}


export default Compare