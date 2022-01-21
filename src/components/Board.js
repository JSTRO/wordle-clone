import React, { useState } from 'react'
import Row from './Row'

function Board({currentRound, guess, setGuess, word}) {
  return (
    <div>
      {[...Array(6)].map((row, rowID) =>(
        <Row 
          key={rowID} 
          rowID={rowID}
          currentRound={currentRound}
          guess={guess}
          setGuess={setGuess}
          word={word}
        />
      ))}
    </div>
  )
}

export default Board