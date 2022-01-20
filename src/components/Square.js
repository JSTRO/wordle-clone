import React, {useState, useEffect, useRef} from 'react'
import '../App.css'

function Square({name, handleFocus}) {

  const [letter, setLetter] = useState('')
  
  const handleChange = e => {
    setLetter(e.target.value.toUpperCase())
  }

  return (
    <input 
      type="text" 
      value={letter}
      name={name}
      maxLength={1}
      onChange={handleChange} 
      onChange={handleFocus} />
  )
}

export default Square