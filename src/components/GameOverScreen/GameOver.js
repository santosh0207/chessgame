import React from 'react'

export default function GameOver(props) {
    //console.log(window.$gameObject_allMove.winner,"111111111111111");
    return (
        <div>
            <h1>Game Over {window.$gameObject_allMove.winner} !!!!!</h1>
            <h3>Please reload/refresh to play again.</h3>
        </div>
    )
}
