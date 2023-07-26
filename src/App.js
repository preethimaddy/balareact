import './App.css';
import Header from './components/Header';
import Cont from './components/Cont'
import Footer from './components/Footer';
import { useState } from 'react'

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
 
 <div >
  <Header title ="Todo list"/>
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
