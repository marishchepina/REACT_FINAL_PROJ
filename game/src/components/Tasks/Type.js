import './Tasks.scss'


const Type = props => {
    console.log(props.lesson)
    return (
        <div className="watch">
            <div className="watch__img">
                <img src={props.word.img} />
            </div>
            <div className="watch__translate">
                {props.word.translate}
            </div>
            <div className="watch__letters">
                <form className="watch__form" onSubmit={props.onSubmit}>
                    <input
                        className="watch__input"
                        type="text"
                        value={props.value}
                        onChange={props.onChange}
                    />
                    <button className="watch__button" type="submit">Перевірити</button>
                </form>
            </div>
        </div>
    )
}


export default Type