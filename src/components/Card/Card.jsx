import style from './Card.module.css'

export default function Card({id,name,image,onClose}) {
   return (
      <div className={style.container}>
        
            <div className={style.topcard}>
               <button onClick={()=>onClose(id)} className={style.button}>x</button>
               <img src={image} alt={name} className={style.image}/>
            </div>

          
         <h2 className={style.name}>{name}</h2>
         {/* <h2 className={style.card}>{props.status}</h2> */}
         {/* <h2 className={style.card}>{props.species}</h2> */}
         {/* <h2 className={style.card}>{props.gender}</h2> */}
         {/* <h2 className={style.card}>{props.origin}</h2> */}
         
      
         
      </div>
   );
}
