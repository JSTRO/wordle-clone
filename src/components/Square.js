import React, { useEffect } from 'react'
import '../App.css'

function Square({
  cellID,
  guessedLetters,
  setGuessedLetters,
  squareColor,
  setActiveRow,
}) {
  const handleChange = e => {
    let { value } = e.target
    let newArr = [...guessedLetters]
    newArr[cellID] = value
    setGuessedLetters(newArr)
  }

  return (
    <input
      type="text"
      value={guessedLetters[cellID]}
      maxLength={1}
      onChange={handleChange}
      className={squareColor}
    />
  )
}

export default Square