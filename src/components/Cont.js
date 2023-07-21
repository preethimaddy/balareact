import React from 'react'

function Cont() {
    function handleNameChange(){
        const names =["earn", "Develope", "Give","Grow"]
        const int = Math.floor(Math.random()*3)
        return names[int]
       }
       const handleClick1 = (e) => {
        console.log(e.target.innerText)
       }
       const handleClick = (name) => {
        console.log(`Thanks for the support ${name}`)
       }
  return (

    <main>
      <p onDoubleClick={() =>handleClick('preeti')}>Let's {handleNameChange()} Money!</p>
      <button onClick={(e) =>handleClick1(e)}>Subscribe</button>
    </main>
  )
}

export default Cont