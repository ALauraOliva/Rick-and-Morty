import './App.css';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   //todo: Creando estado caracters-array
   let [characters,setCharacters] = useState([]); 
   const [access, setAccess] = useState(false);

   const login = async(userData) => {
      try {
         const { email, password } = userData;
         const data = await axios(URL + `?email=${email}&password=${password}`)
         // const { access } = data; //!no sigue acces sigue data
         const access = data.data.access;
         console.log(data)
         setAccess(access);
         access && navigate('/Home');
      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(() => {
      //eslint-disable-next-line
      !access && navigate('/')  //ESTA EN PRUEBA
   },[access])

   const onSearch = async(id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if(data.name) {
            let Existe = characters && characters.find(charac=> charac.id===Number(id));

            Existe 
            ? setCharacters([...characters]) 
            : setCharacters((oldChars) => [...oldChars, data]);
         }

      } catch (error) {
         alert('¡No hay personajes con este ID!')
      }
   }
   
   const onClose = (id)=>{
      let EraseCharac = characters.filter((charac)=> charac.id !== Number(id));
      setCharacters(EraseCharac);
   }
   
   return (
      <div id='AppContainer'>
         <div id='stars'>
                  <div id='stars2'>
                     <div id='stars3'>
                        
                     </div>
                  </div>
               </div>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>
         }
         <Routes>
            <Route path={'/'} element={<Form login = {login}/>} />
            <Route path={'/Home'} element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path={'/About'} element={<About/>}/>
            <Route path={'/Detail/:id'} element={<Detail/>}/>
            <Route path={'/favorites'} element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
