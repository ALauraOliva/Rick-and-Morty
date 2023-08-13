import styledSearchBar from './SearchBar.module.css'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import { RiUserAddLine } from 'react-icons/ri'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchBar({onSearch}) {
   const location   = useLocation();
   const [id,setId] = useState('');

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (    
      <>
         {location.pathname === '/Home' && <input className={styledSearchBar.inputSearch}onChange = {handleChange} value={id} placeholder='  Search a character by ID '></input>}
         {location.pathname === '/Home' && <button className={styledSearchBar.button_text} onClick={() =>{onSearch(id); setId('')}}><RiUserAddLine size={30}/></button>}
         {location.pathname === '/Home' && <button className={styledSearchBar.button_text} onClick={() =>{onSearch(Math.floor(Math.random() * 826)); setId('')}}><GiPerspectiveDiceSixFacesRandom size={30}/></button>}
      </>
   );
}
