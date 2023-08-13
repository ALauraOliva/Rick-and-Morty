import './App.css';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { searchById } from './redux/actions';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch             = useDispatch();

   let [characters,setCharacters] = useState([]); 
   const [access, setAccess]      = useState(false);

   useEffect(() => {
      !access && navigate('/')
   },[access, navigate])
   
   const login = async (userData) => {
      try {
         const { data } = await axios.post ('http://localhost:3001/rickandmorty/logIn', userData);

         setAccess(data.access)

         if(data.error) throw Error(data.error)

      } catch (error) {

         alert(`Error: ${error.response.data.error}`);
      }
   }

   const onSearch = (id) => {
      dispatch(searchById(id))
   }
   
   const onClose = (id)=>{
      let EraseCharac = characters.filter((charac)=> charac.id !== Number(id));
      setCharacters(EraseCharac);
   }
   
   return (
      <div id='AppContainer'>
         <div id='stars'>
            <div id='stars2'>
               <div id='stars3'/>
            </div>
         </div>

         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>
         }

         <Routes>
            <Route path={'/'} element={<Form login = {login} access={access} />} />
            <Route path={'/Home'} element={<Cards onClose={onClose} />}/>
            <Route path={'/About'} element={<About/>}/>
            <Route path={'/Detail/:id'} element={<Detail/>}/>
            <Route path={'/favorites'} element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
