import React from 'react'

function Alert({ gameWon, gameLost, activeRow, word }) {
  const showAlert = () => {
    if (gameWon) {
      return (
        <h3 className="alert-won">
          You guessed the word in {activeRow} {activeRow > 1 ? 'tries' : 'try'}!
        </h3>
      )
    } else if (gameLost) {
      return (
        <h3 className="alert-lost">
          Sorry, chap. The answer was {word.toUpperCase()}. Better luck next
          word.
        </h3>
      )
    } else {
      return <br></br>
    }
  }

  const alert = showAlert()

  return (
    <div>{alert}</div>
  )
}

export default Alert