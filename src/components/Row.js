import React, { useState, useEffect } from 'react'
import Square from './Square'

function Row({rowID, setCurrentRound, currentRound, guess, setGuess, word}) {
  const [letters, setLetters] = useState(Array(5).fill(''))
  const [isRowActive, setIsRowActive] = useState(false)
  const [squareColors, setSquareColors] = useState([])

  console.log(guess)

  useEffect(() => {
    if (rowID === currentRound) {
      setIsRowActive(true)
    }
  }, [currentRound])

  const handleFocus = e => {
    if (e.target.value.length === e.target.maxLength && e.target.nextSibling) {  
      e.target.nextSibling.focus()
    }
  }

  const handleDelete = e => {
    if(e.keyCode === 8 && e.target.value.length < e.target.maxLength &&  e.target.previousSibling) {
      e.target.previousSibling.focus()
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (guess && guess.length < 5) {
      alert('Guess must be 5 letters long.')
      return
    }

    let wordArr = word && word.split('')

    // console.log(wordArr)

    for (let i=0; i<letters.length; i++) {
      console.log(letters[i])

      if (letters[i] === wordArr[i]) {
        setSquareColors(squareColors => [...squareColors, 'background-green'])
      } else if (wordArr.includes(letters[i])) {
        setSquareColors(squareColors => [...squareColors, 'background-yellow'])
      } else {
        setSquareColors(squareColors => [...squareColors, 'background-gray'])
      }
    }
    
    setCurrentRound(currentRound => currentRound++)
  }

  console.log(rowID, currentRound)

  useEffect(() => {
    setGuess(letters.join(''))
  }, [letters])

  return (
    <form onChange={handleFocus} onKeyDown={handleDelete} onSubmit={handleSubmit}>
      {letters.map((col, colID) => (
        <Square 
          key={colID} 
          colID={colID}
          isRowActive={isRowActive}
          letters={letters} 
          setLetters={setLetters}
          squareColor={squareColors[colID]}
          />
      ))}
      <button onSubmit={handleSubmit}>Submit</button>  {/*hidden button is work around*/}
    </form>  
  )
}

export default Row