import './Tasks.scss'


const Watch = props => {
    console.log(props)
    return (
        <div className="watch">
            <div className="watch__word">
                {props.word.word}
                <div className="watch__translate">
                    {props.word.translate}
                </div>
            </div>
            <div className="watch__img">
                <img src={props.word.img} />
            </div>
            <audio src={props.word.audio} autoPlay />
        </div>
    )
}


export default Watch 