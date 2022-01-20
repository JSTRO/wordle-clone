import React, {useState, useEffect, useRef} from 'react'
import '../App.css'

function Square({colID, letters, setLetters}) {
  
  const handleChange = e => {
    let {value} = e.target
    value = value.toUpperCase()

    let newArr = [...letters]
    newArr[colID] = value 

    setLetters(newArr)
  }

  return (
    <input 
      type="text" 
      readOnly
      value={letters[colID]}
      name={letters[colID]}
      maxLength={1}
      onChange={handleChange} />
  )
}

export default Square