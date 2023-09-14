import './App.css';
import Cards from './views/Cards/Cards';
import Nav from './components/Nav/Nav';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import Error from './views/Error/Error';
import Favorites from './views/Favorites/Favorites';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Route,Routes,useLocation,useNavigate } from 'react-router-dom';


function App() {

   const [characters, setCharacters] = useState([]);
   const [access,setAccess] = useState(false);

   const navigate = useNavigate();

   async function login(userData){
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(`${URL}?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         alert('no es usuario')
         // console.log(error.message)
      }
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id){
      try {
         const URL_BASE = "http://localhost:3001/rickandmorty/character"
         const { data } = await axios.get(`${URL_BASE}/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         console.log(error.message)
      }
   };

   function onClose(id){
      setCharacters((oldChars)=>{
         return oldChars.filter((character)=>character.id !== id)
      })
   }

   function generarNumeroAleatorio() {
      var min = 1;
      var max = 826;
    
      // Generar un número aleatorio entre min y max
      var id = Math.floor(Math.random() * (max - min + 1)) + min;
      return id;     
    }

    const location = useLocation()
    const showNav = location.pathname !== '/';
    
   return (
      <div className='App'>
         {showNav && <Nav onSearch={onSearch} random={generarNumeroAleatorio}/>}
         

         <Routes>
            <Route path= "/" element= {<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} onSearch={onSearch} random={generarNumeroAleatorio}/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
         </Routes>
         


         
         
      </div>
   );
}

export default App;


