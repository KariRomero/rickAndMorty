import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';
import Paginate from '../../components/Paginate/Paginate';
import style from './Cards.module.css'



export default function Cards({characters, onClose,onSearch,random}) {
   return ( 
      
   <div className={style.background}>
      <Nav onSearch={onSearch} random={random}/>
   <div className={style.container}>
      
         {
            characters && characters.map((element, index)=>{
               return(
               <Card key={index}
                  id={element.id}
                  name={element.name}
                  origin={element.origin.name}
                  image={element.image}
                  gender={element.gender}
                  onClose={onClose}            
               />
            );
         })}
                 
      
   </div>

   <Paginate/>

   </div>
)};