import React from 'react'
import { useState } from 'react'

function Multcounter() {

  const[counter, setCounter]=useState(10)

  function addvalue(){
    setCounter( prevcounter=> prevcounter+1)
    setCounter( prevcounter=> prevcounter+1)
    setCounter( prevcounter=> prevcounter+1)

  }

  return (
    <div>
      <h1>This is counter Adding Multiple counter 3</h1>
      <button onClick={addvalue}>Mult value is {counter}</button>
      
    </div>
  )
}

export default Multcounter
