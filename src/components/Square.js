import React, { useState, useEffect, useRef } from 'react'
import '../App.css'

function Square({
  colID,
  letters,
  setLetters,
  isRowActive,
  squareColor,
}) {
  const handleChange = e => {
    let { value } = e.target

    let newArr = [...letters]
    newArr[colID] = value

    setLetters(newArr)
  }

  return (
    <input
      type="text"
      readOnly={!isRowActive}
      value={letters[colID]}
      name={letters[colID]}
      maxLength={1}
      onChange={handleChange}
      className={squareColor}
    />
  )
}

export default Square