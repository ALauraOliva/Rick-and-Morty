import styledSearchBar from './SearchBar.module.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchBar({onSearch}) {
   const location   = useLocation();
   const [id,setId] = useState('');

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   let idRandom =  Math.floor(Math.random() * 826)

   return (    
      <>
         {location.pathname === '/Home' && <input className={styledSearchBar.inputSearch}onChange = {handleChange} value={id} placeholder='  Search a character by ID '></input>}
         {location.pathname === '/Home' && <button className={styledSearchBar.button_text} onClick={() =>{onSearch(id); setId('')}}>+</button>}
         {location.pathname === '/Home' && <button className={styledSearchBar.button_text} onClick={() =>{onSearch(idRandom); setId('')}}>🔀</button>}
      </>
   );
}
