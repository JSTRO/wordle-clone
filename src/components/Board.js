import React, { useState } from 'react'
import Row from './Row'

function Board({ word, setGameWon, setGameLost }) {
  const [activeRow, setActiveRow] = useState(0)

  return (
    <div className="board">
      {[...Array(6)].map((row, rowID) => (
        <Row
          key={rowID}
          rowID={rowID}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
          word={word}
          setGameWon={setGameWon} 
          setGameLost={setGameLost}
        />
      ))}
    </div>
  )
}

export default Board