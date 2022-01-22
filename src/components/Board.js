import React, { useState } from 'react'
import Row from './Row'

function Board({ word }) {
  const [activeRow, setActiveRow] = useState(0)

  return (
    <div>
      {[...Array(6)].map((row, rowID) => (
        <Row
          key={rowID}
          rowID={rowID}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
          word={word}
        />
      ))}
    </div>
  )
}

export default Board