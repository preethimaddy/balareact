import './App.css';
import Header from './components/Header';
import Cont from './components/Cont'
import Footer from './components/Footer';
import { useState } from 'react'
import AddItem from './components/AddItem';

   function App () {
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
      const [newItem,setNewItem] = useState()
      const addItem = (item) =>{
        const id = items.length ? items[items.length -1].id + 1 : 1;
        const addNewItem = {id, checked:false, item}
        const listItems = [...items, addNewItem]
        setItems(listItems)
      }
      
      const handleCheck = (id) =>{
        const listItems = items.map((item)=> item.id===id ? {...item, checked:!item.checked} : item)
        setItems(listItems)
      }
  
      const handleDelete = (id) =>{
      const listItem = items.filter((item)=>item.id!==id)
      setItems(listItem)
      localStorage.setItem("Todo_list", JSON.stringify(listItem))
  
      }
      const handleSubmit=(e) => {
        e.preventDefault();
        if(!newItem)
        return;
        console.log(newItem)
        addItem(newItem)
       setNewItem('')
        console.log('submitted')
      }
  return (
 <>
 
 <div >
  <Header title ="Todo list"/>
  <AddItem 
  newItem ={newItem}
  setNewItem = {setNewItem}
  handleSubmit ={handleSubmit}
  
  />
   <Cont 
   items ={items}
   handleCheck={handleCheck}
   handleDelete={handleDelete}/>
   <Footer length={items.length}/>
 </div>
 </>
  );
  }
export default App;
