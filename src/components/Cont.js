import React from 'react'

function Cont() {
    function handleNameChange(){
        const names =["earn", "Develope", "Give","Grow"]
        const int = Math.floor(Math.random()*3)
        return names[int]
       }
       const handleClick = (name) => {
        console.log(`Thanks for the support ${name}`)
       }
  return (

    <main>
      <p>Let's {handleNameChange()} Money!</p>
      <button onClick={(e) =>handleClick('preethi')}>Subscribe</button>
    </main>
  )
}

export default Cont