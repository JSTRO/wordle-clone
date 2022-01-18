import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Square from './Square'

function App() {
  const [wordList, setWordList] = useState([])
  const [board, setBoard] = useState([])

  useEffect(() => {
    const getWordList = async () => {
      const res = await axios.get('https://corpora-api.glitch.me/words/word_clues/clues_five')
      setWordList(Object.keys(res.data.data.data))
    }
    getWordList() 
  }, [])

  useEffect(() => {
    const getRandomWord = array => {
      let randomIdx = Math.floor(Math.random() * array.length)
      console.log(randomIdx)
    }
    getRandomWord(wordList)
  }, [wordList])

  useEffect(() => {
    const generateBoard = () => {
      return (
        [...Array(5)].map(() => {
          return (
            <div className="row"> 
              {[...Array(6)].map(() =>< Square />)}
            </div>   
          )
        })
      )
    }
    
    setBoard(generateBoard())
  }, [])
  
  return (
    <div className="App">
      <header>Wordle Clone</header>

      {board}
    </div>
  )
}

export default App
