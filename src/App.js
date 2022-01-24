import React, { useState, useEffect } from 'react'
import Board from './components/Board'
import Alert from './components/Alert'
import './App.css'
import axios from 'axios'

function App() {
  const [wordList, setWordList] = useState('')
  const [word, setWord] = useState('')
  const [gameWon, setGameWon] = useState(false)
  const [gameLost, setGameLost] = useState(false)

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
    const getRandomWord = wordArr => {
      let randomIdx = Math.floor(Math.random() * wordArr.length)
      return wordArr[randomIdx]
    }
    let randomWord = getRandomWord(wordList)
    setWord(randomWord)
  }, [wordList])

  console.log(word)

  return (
    <div className="App">
      <h2>WORDLE</h2>
      <Alert gameWon={gameWon} gameLost={gameLost}/>
      <Board word={word} setGameWon={setGameWon} setGameLost={setGameLost}/>
    </div>
  )
}

export default App