import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from './Row'

function Board({ word, setGameWon, setGameLost, activeRow, setActiveRow }) {
  return (
    <Container className="board">
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
    </Container>
  )
}

export default Board