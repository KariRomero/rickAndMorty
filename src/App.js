import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
// import characters from './data.js';
import { useState } from 'react';
import axios from 'axios';
import { Route,Routes } from 'react-router-dom';

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
      console.log(id)
      return id;     
    }

   return (
      <div className='App'>
         
         <Nav onSearch={onSearch} random={generarNumeroAleatorio}/>
         <Cards characters={characters} onClose={onClose}/>
         
      </div>
   );
}

export default App;
