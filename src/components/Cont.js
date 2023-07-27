import React from 'react'
import { FaTrashAlt} from "react-icons/fa"
function Cont  ({items, handleCheck, handleDelete})  {

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
   onClick={()=>handleDelete(item.id)}
   aria-label={`Delete ${item.item}`}/>
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