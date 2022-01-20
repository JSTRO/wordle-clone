import React from 'react'
import Row from './Row'

function Board() {
  return (
    <div>
      {[...Array(5)].map((row, rowID) => <Row key={rowID}/>)}
    </div>
  )
}

export default Board