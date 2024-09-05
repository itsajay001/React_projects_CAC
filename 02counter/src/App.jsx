import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Multcounter from './Multcounter'

function App() {
 
  let [counter, setCounter]= useState(0);

 let chnagevalue =()=>{
    counter+=1;
    console.log(counter)
    setCounter(counter>24? 24:counter);
 }

 let removevalue =()=>{
  counter-=1;
  setCounter(counter<0? 0: counter)
 }

  return (
    <>
    <h1>Count is {counter} </h1>
     <button onClick={chnagevalue}>Add counter </button>
     <button onClick={removevalue}>Remove counter</button>

     <Multcounter/>
    </>
  )
}

export default App
