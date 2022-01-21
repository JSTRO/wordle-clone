import React, {useState, useEffect, useRef} from 'react'
import Board from './components/Board'
import './App.css'
import axios from 'axios'

function App() {

  const [wordList, setWordList] = useState('')
  const [word, setWord] = useState('')
  const [guess, setGuess] = useState('')
  const [currentRound, setCurrentRound] = useState(0)

  useEffect(() => {
    const getWordList = async () => {
      const res = await axios.get('https://corpora-api.glitch.me/words/word_clues/clues_five')
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
      <Board 
        currentRound={currentRound} 
        setCurrentRound={setCurrentRound}
        guess={guess} 
        setGuess={setGuess}
        word={word}
      />
    </div>
  )
}

export default App
