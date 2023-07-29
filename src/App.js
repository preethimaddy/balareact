import './App.css';
import Header from './components/Header';
import Cont from './components/Cont'
import Footer from './components/Footer';
import { useState } from 'react'
import AddItem from './components/AddItem';
import Search from './components/Search';


   function App () {
    const [items, setItems] = useState(JSON.parse
      (localStorage.getItem('Todo_list'))
     )
      const [newItem,setNewItem] = useState()
      const [search, setSearch] = useState('')
      const addItem = (item) =>{
        const id = items.length ? items[items.length -1].id + 1 : 1;
        const addNewItem = {id, checked:false, item}
        const listItems = [...items, addNewItem]
        setItems(listItems)
      }
      
      const handleCheck = (id) =>{
        const listItems = items.map((item)=> item.id===id ? {...item, checked:!item.checked} : item)
        setItems(listItems)
        localStorage.setItem('Todo_list', JSON.stringify(listItems))
      }
  
      const handleDelete = (id) =>{
      const listItems = items.filter((item)=>item.id!==id)
     setItems(listItems)
     localStorage.setItem('Todo_list', JSON.stringify(listItems))
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
  <Search 
  search ={search}
  setSearch={setSearch}/>

      
   <Cont 
   items ={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
   handleCheck={handleCheck}
   handleDelete={handleDelete}/>
   
   <Footer length={items.length}/>
 </div>
 </>
  );
  }
export default App;
