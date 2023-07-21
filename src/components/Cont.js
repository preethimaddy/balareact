import React from 'react'
import { useState } from 'react'
import { FaTrashAlt} from "react-icons/fa"
function Cont  ()  {
  const [items, setItems] = useState(
    [
      {
        id:1,
        checked:false,
        item:"Practice Coding"
      },
      {
        id:2,
        checked:false,
        item:"Play Cricket"
      },
      {
        id:3,
        checked:false,
        item:"Read AI"
      }
    ])
    const handleCheck = (id) =>{
      const listItems = items.map((item)=> item.id===id ? {...item, checked:!item.checked} : item)
      setItems(listItems)
    }

    const handleDelete = (id) =>{
    const listItem = items.filter((item)=>item.id!==id)
    setItems(listItem)
    localStorage.setItem("Todo_list", JSON.stringify(listItem))

    }
  return (
<>
<main>
<p>Hi Everyone</p>
  {(items.length) ? (
  <ul>
  {items.map((item) =>(
    <li className="item" key={item.id}>
    <input
     type="checkbox"
     onChange={() =>handleCheck(item.id)}
      checked= {item.checked}>
    </input>
    <label 
    style ={(item.checked) ? {textDecoration:'line-through'}: null }
    onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
   <FaTrashAlt 
   role ="button"
   tabIndex="0"
   onClick={()=>handleDelete(item.id)}/>
  </li>
  ))}
 </ul>
 ) :(
  <p>You're list is Empty!!!! </p>
 )
 }  
    </main>
    </>
    
  )
}

export default Cont