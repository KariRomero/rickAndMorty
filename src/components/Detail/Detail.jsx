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
           <h1 className={style.name}>{character.name}</h1>
           <div className={style.detailcontainer}>
           <h3 className={style.Detail}>Status | {character.status}</h3>
           <h3 className={style.Detail}>Specie | {character.species}</h3>
           <h3 className={style.Detail}>Gender | {character.gender}</h3>
           <h3 className={style.Detail}>Origin | {character.origin?.name}</h3>
           <img src={character.image} alt={character.name} className={style.image}/>              
           </div>
      </div>
    )
  }