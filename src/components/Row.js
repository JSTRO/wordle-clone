import React, { useState, useEffect } from 'react'
import Square from './Square'

function Row({rowID, currentRound, setGuess}) {
  const [letters, setLetters] = useState(Array(5).fill(''))
  const [isRowActive, setIsRowActive] = useState(false)

  const handleFocus = e => {
    if (e.target.value.length === e.target.maxLength) {  
      e.target.nextSibling.focus()
    }
  }

  const handleDelete = e => {
    if(e.keyCode === 8 && e.target.value.length < e.target.maxLength) {
      e.target.previousSibling.focus()
    }
  }

  useEffect(() => {
    if (rowID === currentRound) {
      setIsRowActive(true)
    }
  }, [])

  useEffect(() => {
    setGuess(letters.join('').toLowerCase())
  }, [letters])

  return (
    <form onChange={handleFocus} onKeyDown={handleDelete}>
      {[...Array(5)].map((col, colID) => (
        <Square 
          key={colID} 
          colID={colID}
          isRowActive={isRowActive}
          letters={letters} 
          setLetters={setLetters}/>
      ))}
    </form>  
  )
}

export default Row