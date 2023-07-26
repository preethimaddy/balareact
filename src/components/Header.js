import React from 'react'

function Header({title}) {
  // const headerStyle ={backgroundColor:'mediumblue', color:'white', width:'50 px'}  //inline style
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
  Header.defaultProps = {
    title: "To DO List"
  }
}

export default Header