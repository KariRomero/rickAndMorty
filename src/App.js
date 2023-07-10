import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import { useState } from 'react';
import axios from 'axios';
import { Route,Routes,useLocation } from 'react-router-dom';

function App() {

   const [characters, setCharacters] = useState([])



   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((character)=>character.id === data.id);
            if (exist){
               alert('Ya existe');
            } else {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

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
      //console.log(id)
      return id;     
    }

    const location = useLocation()
    const showNav = location.pathname !== '/';
    

    

   return (
      <div className='App'>
         {showNav && <Nav onSearch={onSearch} random={generarNumeroAleatorio}/>}
         

         <Routes>
            <Route path= "/" element= {<Form/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         


         
         
      </div>
   );
}

export default App;
