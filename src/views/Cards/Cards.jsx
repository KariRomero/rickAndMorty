import Card from '../../components/Card/Card';
import style from './Cards.module.css'



export default function Cards({characters, onClose}) {
   return ( 
      
   <div className={style.background}>
   <div className={style.container}>
      
         {
            characters && characters.map((element, index)=>{
               return(
               <Card key={index}
                  id={element.id}
                  name={element.name}
                  origin={element.origin.name}
                  image={element.image}
                  onClose={onClose}            
               />
            );
         })}
                 
      
   </div>
   </div>
)};