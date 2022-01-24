import React from 'react'

function Alert({ gameWon, gameLost }) {

  const showAlert = () => {
    if (gameWon) {
      return (
        <h3 className="alert-won">You won!</h3>
        //`You guessed the word in ${activeRow + 1} ${activeRow > 0 ? 'tries' : 'try'}!`
      )
    } else if (gameLost) {
      return ( 
        <h3 className="alert-lost">You lost.</h3>
        //`Sorry, chap. The answer was ${word.toUpperCase()}. Better luck next word.`
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