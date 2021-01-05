import React from 'react'


function ShowWord({ word }) {
    console.log(word)
    let showWord = word.map(el => <div key={el.id}><p>{el.word}</p><p>{el.translate}</p></div>)
    return (
        <div>
            {showWord}
        </div>
    )
}

export default ShowWord