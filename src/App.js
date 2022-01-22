import React, { useState, useEffect } from 'react'
import Board from './components/Board'
import './App.css'
import axios from 'axios'

function App() {
  const [wordList, setWordList] = useState('')
  const [word, setWord] = useState('')

  const url = `https://corpora-api.glitch.me/words/word_clues/clues_five`

  useEffect(() => {
    const getWordList = async () => {
      const res = await axios.get(url)
      setWordList(Object.keys(res.data.data.data))
    }
    getWordList()
  }, [])

  useEffect(() => {
    const getRandomWord = wordArr => {
      let randomIdx = Math.floor(Math.random() * wordArr.length)
      return wordArr[randomIdx]
    }
    let randomWord = getRandomWord(wordList)
    setWord(randomWord)
  }, [wordList])

  return (
    <div className="App">
      <h2>Wordle Clone</h2>
      <Board word={word} />
    </div>
  )
}

export default App