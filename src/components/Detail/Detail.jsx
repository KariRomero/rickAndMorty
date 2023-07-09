import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import style from './Detail.module.css'




export default function Detail() {
    const {id} = useParams()
    const [character, setCharacter] = useState({});
  
    useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);
  
  
  
    return (
      <div className={style.container} >
        <h1 className={style.DetailTitle}>Detail</h1>
           <h2 className={style.Detail}>{character.name}</h2>
           <h2 className={style.Detail}>{character.status}</h2>
           <h2 className={style.Detail}>{character.species}</h2>
           <h2 className={style.Detail}>{character.gender}</h2>
           <h2 className={style.Detail}>{character.origin?.name}</h2>
           <img src={character.image} alt={character.name}/>              
      </div>
    )
  }