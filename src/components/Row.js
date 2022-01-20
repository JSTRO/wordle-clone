import React from 'react'
import Square from './Square'

function Row() {
  return (
    <form>
      {[...Array(6)].map((col, colID) => <Square key={colID}/>)}
    </form>  
  )
}

export default Row