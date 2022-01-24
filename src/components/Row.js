import React, { useState, useEffect } from 'react'
import Square from './Square'

function Row({ rowID, word, activeRow, setActiveRow, setGameWon, setGameLost }) {
  const [letters, setLetters] = useState(Array(5).fill(''))
  const [guess, setGuess] = useState('')
  const [squareColors, setSquareColors] = useState([])
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [rowDisabled, setRowDisabled] = useState(true)

  useEffect(() => {
    if (activeRow === rowID) {
      setRowDisabled(false)
    }
  }, [activeRow, rowID])

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

  const getRowStatus = () => {
    let wordArr = word && word.split('')

    let lettersUsed = Array(5).fill(false)
    let statuses = Array.from(Array(guess.length))

    // handle correct letters
    letters.forEach((letter, i) => {
      if (letter === wordArr[i]) {
        statuses[i] = 'correct'
        lettersUsed[i] = true
        return
      }
    })

    // handle absent letters
    letters.forEach((letter, i) => {
      if (statuses[i]) return

      if (!wordArr.includes(letters[i]))  {
        statuses[i] = 'missing'
        return
      }

      // handle present letters
      let currentIdx = wordArr.findIndex((el, idx) => el === letter && !lettersUsed[idx])

      if (currentIdx > -1) {
        statuses[i] = 'present'
        lettersUsed[currentIdx] = true
        return
      } else {
        statuses[i] = 'missing'
        return
      }
    })
    return statuses
  }

  const getClassFromStatus = status => {
    if (status === 'correct') {
      return 'background-green'
    } else if (status === 'present') {
      return 'background-yellow'
    } else {
      return 'background-gray'
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

    // set square colors
    let statuses = getRowStatus()
    statuses.forEach(status => setSquareColors(prev => [...prev, getClassFromStatus(status)]))

    setActiveRow(activeRow + 1)

    setRowDisabled(true)
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