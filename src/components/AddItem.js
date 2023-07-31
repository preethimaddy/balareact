import React from 'react'
import { FaPlus } from 'react-icons/fa'
import {useRef} from 'react'
function AddItem({newItem, setNewItem, handleSubmit}) {
  const inputRef = useRef()
  return (
    <>
    
<form className='addForm' onSubmit ={handleSubmit}>
    <label htmlFor='addItem'>Add Items</label>
    <input
    autoFocus
    ref={inputRef}
    id='addItem'
    type='text'
    placeholder='Add Item'
    required
    value ={newItem}
    onChange ={(e) => setNewItem(e.target.value)}/>
   
    <button type='submit'
    aria-label='Add Item'
    onClick={()=> inputRef.current.focus()}> 
    {/* to keep focus on the same tab */}
       
         <FaPlus />
    </button>
</form>
    </>
  )
}

export default AddItem