import React, { useState } from 'react'
import Row from './Row'

function Board({currentRound}) {
  return (
    <div>
      {[...Array(6)].map((row, rowID) =>(
        <Row 
          key={rowID} 
          rowID={rowID}
          currentRound={currentRound}
        />
      ))}
    </div>
  )
}

export default Board