import React, { useState, useEffect } from 'react'
import Square from './Square'
import getRowStatus from '../utils/getRowStatus'
import getClassFromStatus from '../utils/getClassFromStatus'

function Row(props) {
  let { rowID, word, activeRow, setActiveRow, setGameWon, setGameLost } = props

  const [guessedLetters, setGuessedLetters] = useState(Array(5).fill(''))
  const [guess, setGuess] = useState('')
  const [squareColors, setSquareColors] = useState([])
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [rowDisabled, setRowDisabled] = useState(true)

  // enable row
  useEffect(() => {
    if (activeRow === rowID) {
      setRowDisabled(false)
    }
  }, [activeRow, rowID])

  useEffect(() => {
    setGuess(guessedLetters.join(''))
  }, [guessedLetters])

  // autofocus next cell
  const handleFocus = e => {
    let { value, maxLength, nextSibling } = e.target
    if (value.length === maxLength && nextSibling) {
      nextSibling.focus()
    }
  }

  const handleDelete = e => {
    let { value, maxLength, previousSibling } = e.target
    if (e.keyCode === 8 && value.length < maxLength && previousSibling) {
      previousSibling.focus()
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitDisabled(false)
    if (submitDisabled) return
    if (guess && guess.length < 5) {
      alert(`Guess must be 5 letters long.`)
      return
    }
    // set cell colors
    let statuses = getRowStatus(guessedLetters, word, guess)
    statuses.forEach(status =>
      setSquareColors(prev => [...prev, getClassFromStatus(status)])
    )
    // increment active row
    setActiveRow(activeRow + 1)
    // set completed row to readonly
    setRowDisabled(true)
    // prevent multiple submits
    setSubmitDisabled(true)

    if (word === guess) {
      setGameWon(true)
    }
    if (activeRow > 4 && word !== guess) {
      setGameLost(true)
    }
  }

  return (
    <form
      onChange={handleFocus}
      onKeyDown={handleDelete}
      onSubmit={handleSubmit}
    >
      <fieldset disabled={rowDisabled}>
        {guessedLetters.map((cell, cellID) => (
          <Square
            key={cellID}
            cellID={cellID}
            guessedLetters={guessedLetters}
            setGuessedLetters={setGuessedLetters}
            squareColor={squareColors[cellID]}
          />
        ))}
        <button>Submit</button> {/*hidden button is workaround*/}
      </fieldset>
    </form>
  )
}

export default Row