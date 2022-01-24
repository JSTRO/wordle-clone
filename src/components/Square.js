import React, { useRef, useEffect } from 'react'
import '../App.css'

function Square({ cellID, letters, setLetters, squareColor, setActiveRow }) {
  const handleChange = e => {
    let { value } = e.target
    let newArr = [...letters]
    newArr[cellID] = value
    setLetters(newArr)
  }

  const inputEl = useRef('')

  useEffect(() => {
    if (inputEl) inputEl.current.focus()
  }, [])

  return (
    <input
      ref={inputEl}
      type="text"
      value={letters[cellID]}
      maxLength={1}
      onChange={handleChange}
      className={squareColor}
    />
  )
}

export default Square