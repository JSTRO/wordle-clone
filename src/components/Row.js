import React, { useState, useEffect } from 'react'
import Square from './Square'

function Row({ rowID, word, activeRow, setActiveRow }) {
  const [letters, setLetters] = useState(Array(5).fill(''))
  const [guess, setGuess] = useState('')
  const [squareColors, setSquareColors] = useState([])
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [rowDisabled, setRowDisabled] = useState(true)

  useEffect(() => {
    if (activeRow === rowID) {
      setRowDisabled(false)
    }
  }, [activeRow])

  useEffect(() => {
    setGuess(letters.join(''))
  }, [letters])

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

    let wordArr = word && word.split('')

    console.log(wordArr)

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === wordArr[i]) {
        setSquareColors(squareColors => [...squareColors, 'background-green']) //remove letter from array?
      } else if (wordArr.includes(letters[i])) {
        setSquareColors(squareColors => [...squareColors, 'background-yellow'])
      } else {
        setSquareColors(squareColors => [...squareColors, 'background-gray'])
      }
    }

    if (word === guess) { //alert after color change
      alert(`You guessed the word in ${activeRow} ${activeRow > 1 ? 'tries' : 'try'}!`)
      return
    }

    setActiveRow(activeRow + 1)

    if (activeRow > 4 && word !== guess) { //alert after color change
      alert( `Sorry, chap. Better luck next word.`)
      return
    }

    setRowDisabled(true)
    setSubmitDisabled(true)
  }

  return (
    <form
      onChange={handleFocus}
      onKeyDown={handleDelete}
      onSubmit={handleSubmit}
    >
      <fieldset disabled={rowDisabled}>
        {letters.map((cell, cellID) => (
          <Square
            key={cellID}
            cellID={cellID}
            letters={letters}
            setLetters={setLetters}
            squareColor={squareColors[cellID]}
          />
        ))}
        <button >Submit</button> {/*hidden button is workaround*/}
      </fieldset>
    </form>
  )
}

export default Row