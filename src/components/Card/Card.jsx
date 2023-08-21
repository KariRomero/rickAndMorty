import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';

export default function Card({id,name,image,onClose,origin}) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state=>state.myFavorites)
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         dispatch(removeFav(id));
      }
      else{
         setIsFav(true);
         dispatch(addFav({id,name,image,onClose}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
  
   
   return (
      <div className={style.container}>
          
            <div className={style.topcard}>

            
            {
               isFav ? (
                        <button onClick={handleFavorite} className={style.buttonFav}>❤️</button>
                       ) : (
                        <button onClick={handleFavorite} className={style.buttonFav}>🤍</button>
                       )
            }            

               <button onClick={()=>onClose(id)} className={style.button}>x</button>
               

            </div>
            <Link to={`/detail/${id}`} className={style.link}>
            <img src={image} alt={name} className={style.image}/>
         
            <h2 className={style.name}>{name}</h2>
            <h3 className={style.name}>Proveniente de {origin}</h3>
          </Link>     
         
      </div>
   );
}
