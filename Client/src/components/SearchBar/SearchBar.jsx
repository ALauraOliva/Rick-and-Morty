import styledSearchBar from './SearchBar.module.css'
import { useState } from 'react';


export default function SearchBar({onSearch}) {

   const [id,setId] = useState('');

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (    
      <>
         <input onChange = {handleChange} value={id} placeholder='  Add a character ... '></input>
         <button className={styledSearchBar.button_text} onClick={() =>{onSearch(id); setId('')}}>Agregar</button>

      </>
   );
}
