import React, { useState, useEffect, useRef } from 'react'
import '../App.css'

function Square({
  cellID,
  letters,
  setLetters,
  isRowActive,
  squareColor,
}) {

  const handleChange = e => {
    let { value } = e.target
    let newArr = [...letters]
    newArr[cellID] = value
    setLetters(newArr)
  }

  return (
    <input
      type="text"
      value={letters[cellID]}
      name={letters[cellID]}
      maxLength={1}
      onChange={handleChange}
      className={squareColor}
      autoFocus
    />
  )
}

export default Square