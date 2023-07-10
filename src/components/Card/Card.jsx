import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id,name,image,onClose}) {
   return (
      <div className={style.container}>
          
            <div className={style.topcard}>
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
