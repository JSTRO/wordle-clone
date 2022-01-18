import React, {useState, useEffect} from 'react'
import './App.css'

function Square() {

  const [letter, setLetter] = useState('')

  return (
    <div className="square">
      <input type="text" maxlength="1"></input>
    </div>
  )
}

export default Square