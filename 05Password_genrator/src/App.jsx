import { useCallback, useState,  useEffect, useRef } from 'react'



function App() {
  const [length, setlength]= useState(8);
  const [password, setpassword]= useState("");
  const [numallowed, setnumber]= useState(false);
  const[charallowed, setchar]= useState(false);

  const genratepassword = useCallback(()=>{  //its invoked function dont assign it
    let pass = "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg";
    let num= "1234567890";
    let char ="!@#$%";


    if(numallowed){
      str+=num;
    }

    if (charallowed){
      str+=char;
    }

    for(let i=0; i<=length; i++){
      let randnum=Math.floor(Math.random()*str.length+1);
      pass+= str[randnum]
      
    }

    setpassword(pass)

    

  },[setpassword, length, numallowed, charallowed])

  const passwordRef= useRef(null);

  const copytoclipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select();
  },[password])
  
  

  useEffect(()=>{

    genratepassword()
  }, [setpassword, length, numallowed, charallowed, genratepassword])


  return (
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
  <h1 className='text-white text-center my-3'>Password generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passwordRef}
       
    />
    <button
    onClick={copytoclipboard}
    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
    >copy</button>
    
</div>
<div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e)=>setlength(e.target.value)}
          />
          <label>Length:{length}</label>
      </div>

      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numallowed}
          id="numberInput"
          onChange={()=>setnumber((prev)=>!prev)}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                setchar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>

</div>

)
}


export default App
