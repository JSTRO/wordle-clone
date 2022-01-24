import React, { useState, useEffect } from 'react'
import Board from './components/Board'
import Alert from './components/Alert'
import axios from 'axios'
import getRandomWord from './utils/getRandomWord.js'
import './App.css'

function App() {
  const [wordList, setWordList] = useState('')
  const [word, setWord] = useState('')
  const [gameWon, setGameWon] = useState(false)
  const [gameLost, setGameLost] = useState(false)
  const [activeRow, setActiveRow] = useState(0)

  const url = `https://corpora-api.glitch.me/words/word_clues/clues_five`

  useEffect(() => {
    const getWordList = async () => {
      try {
        const res = await axios.get(url)
        setWordList(Object.keys(res.data.data.data))
      } catch (err) {
        console.log(err)
      }
    }
    getWordList()
  }, [url])

  useEffect(() => {
    let randomWord = getRandomWord(wordList)
    setWord(randomWord)
  }, [wordList])

  return (
    <div className="App">
      <h2>(SHITTY) WORDLE</h2>
      <Alert
        gameWon={gameWon}
        gameLost={gameLost}
        activeRow={activeRow}
        word={word}
      />
      <Board
        word={word}
        setGameWon={setGameWon}
        setGameLost={setGameLost}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
      />
    </div>
  )
}

export default App