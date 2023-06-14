import './App.css';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState} from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'

function App() {
   //todo: Creando estado caracters-array
   let [characters,setCharacters] = useState([]); 

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let Existe = characters && characters.find(charac=> charac.id===Number(id));
            Existe ? setCharacters([...characters]) : setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      }).catch(function(error){alert('¡No hay personajes con este ID!');});
   }
   
   const onClose = (id)=>{
      let EraseCharac = characters.filter((charac)=> charac.id !== Number(id));
      setCharacters(EraseCharac);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path={'/Home'} element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path={'/About'} element={<About/>}/>
            <Route path={'/Detail/:id'} element={<Detail/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
