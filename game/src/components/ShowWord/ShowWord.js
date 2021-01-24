import './ShowWord.scss'
import MyImage from '../../assets/img/4-l1/1.gif';


const ShowWord = props => {
    console.log('props: ' + props.img)
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

export default ShowWord