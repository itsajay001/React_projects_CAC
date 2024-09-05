
import Card from './Card'

import './App.css'

function App() {
  let varcheck = "Click here"
  let obj={
    name:"ajay",
    email:"hello@"
  }
  

  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl mb-3'>This is Tailwind</h1>

    <Card username="Ajay" click={varcheck} someobj={obj}/>
    </>
  )
}

export default App
