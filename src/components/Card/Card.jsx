import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';

export default function Card({id,name,image,onClose}) {
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
          
            <div className={style.topcard}>.

            
            {
               isFav ? (
                        <button onClick={handleFavorite} className={style.buttonFav}>❤️</button>
                       ) : (
                        <button onClick={handleFavorite} className={style.buttonFav}>🤍</button>
                       )
            }
            

               <button onClick={()=>onClose(id)} className={style.button}>x</button>
               <img src={image} alt={name} className={style.image}/>

            </div>

         <Link to={`/detail/${id}`} className={style.link}>
            <h2 className={style.name}>{name}</h2>
          </Link>
         {/* <h2 className={style.card}>{props.status}</h2> */}
         {/* <h2 className={style.card}>{props.species}</h2> */}
         {/* <h2 className={style.card}>{props.gender}</h2> */}
         {/* <h2 className={style.card}>{props.origin}</h2> */}
         
      
         
      </div>
   );
}
