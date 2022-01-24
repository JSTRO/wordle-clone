export default function getRowStatus(guessedLetters, word, guess) {
  let wordArr = word && word.split('')

  let lettersUsed = Array(5).fill(false)
  let statuses = Array.from(Array(guess.length))

  // handle correct letters
  guessedLetters.forEach((letter, i) => {
    if (letter === wordArr[i]) {
      statuses[i] = 'correct'
      lettersUsed[i] = true
      return
    }
  })

  // handle absent letters
  guessedLetters.forEach((letter, i) => {
    if (statuses[i]) return

    if (!wordArr.includes(guessedLetters[i]))  {
      statuses[i] = 'missing'
      return
    }

    // handle present letters
    let currentIdx = wordArr.findIndex((el, idx) => el === letter && !lettersUsed[idx])

    if (currentIdx > -1) {
      statuses[i] = 'present'
      lettersUsed[currentIdx] = true
      return
    } else {
      statuses[i] = 'missing'
      return
    }
  })
  return statuses
}