import React from 'react'
import { useState } from 'react'
function Cont() {
  const [name, setName] = useState('earn')
    function handleNameChange(){
        const names =["earn", "Develope", "Give","Grow"]
        const int = Math.floor(Math.random()*3)
        setName(names[int]) 
       }
    const [count, setCount] = useState(99);
    function increment(){
      setCount(prevCount => prevCount + 1);
    }
    function decrement () {
      setCount(prevCount => prevCount - 1);
    }
  return (

    <main>
      <p>Let's {name} Money!</p>
      <button onClick={handleNameChange}>Subscribe</button>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </main>
  )
}

export default Cont